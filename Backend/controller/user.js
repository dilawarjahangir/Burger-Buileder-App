const express = require("express");
const User = require("../model/user.js");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const sendToken = require("../utils/jwtToken.js");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middleware/auth.js");

// User registration route
router.post("/create-user", catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    console.log("hi this is working");

    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    const user = await User.create({
      email,
      password
    });

    // Send token
    sendToken(user, 201, res);
  
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
}));




router.post(
    "/login-user",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const { email, password } = req.body;
  
        if (!email || !password) {
          return next(new ErrorHandler("Provide all fields", 404));
        }
  
        // Await the user fetching
        const user = await User.findOne({ email }).select("+password");
  
        if (!user) {
          return next(new ErrorHandler("User doesn't exist", 404));
        }
  
        // Check if the password is valid
        const isPasswordValid = await user.comparePassword(password);
  
        if (!isPasswordValid) {
          return next(
            new ErrorHandler("Please provide the correct information!", 400)
          );
        }
  
        // Send token if authentication is successful
        sendToken(user, 201, res);
        console.log("user logged in");
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );
  router.get(
    "/getuser",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
      console.log("User ");
      try {
        const user = await User.findById(req.user.id);
  
        if (!user) {
          return next(new ErrorHandler("User not found", 404));
        }
  
        res.status(200).json({
          success: true,
          user,
        });
        console.log("User given");
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );
  

  router.get(
    "/logout",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
      try {
        res.cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
        });
        res.status(200).json({
          success: true,
          message: "Logout successful"
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );

module.exports = router;
