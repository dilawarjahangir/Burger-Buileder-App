const express = require("express");

const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const sendToken = require("../utils/jwtToken.js");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middleware/auth.js");
const Order = require("../model/order.js");

router.post(
  "/create-order",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const {
        name,
        street,
        zipCode,
        country,
        user,
        deliveryMethod,
        cart,
        totalprice,
      } = req.body;

      console.log(name, cart, user);
      let order = {
        name,
        street,
        zipCode,
        country,
        user,
        deliveryMethod,
        cart,
        totalprice,
      };
      console.log(order);
      const CreatedOrder = await Order.create(order);

      res.status(201).json({
        success: true,
        CreatedOrder,
      });
    } catch (error) {
      next(error);
    }
  })
);

router.get(
  "/my-orders",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    console.log("i am here")
    const orders = await Order.find({ "user._id": req.user._id });
    

    res.status(200).json({
      success: true,
      orders,
    });
  })
);

module.exports = router;

