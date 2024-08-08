import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../server";

const Header = ({ active }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);
  const navigate =useNavigate()
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        // toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (


    <>
      <div className="h-[56px] px-5  bg-[#703B09] flex justify-between items-center ">
        <div className="p-2 bg-white  rounded-md cursor-pointer">
          <img
            src={`https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png`}
            height="28.5px"
            width="45"
            alt=""
          />
        </div>
        <div className="flex h-full items-center justify-center text-center">
          <Link
            className={` ${
              active === 1 ? "bg-[#8F5C2C] border-b-4 border-[#40A4C8]" : ""
            } text-white cursor-pointer h-full hover:bg-[#8F5C2C] hover:border-b-4 hover:border-[#40A4C8] flex items-center justify-center px-3 `}
            to="/"
          >
            Burger Builder
          </Link>
          {isAuthenticated ? (
            <Link
              className={` ${
                active === 2 ? "bg-[#8F5C2C]  border-b-4 border-[#40A4C8]" : ""
              } text-white cursor-pointer h-full hover:bg-[#8F5C2C]  hover:border-b-4 hover:border-[#40A4C8] flex items-center justify-center px-3 `}
              to="/order"
            >
              Orders
            </Link>
          ) : (
            ""
          )}
          {isAuthenticated ? (
            <>
              <Link onClick={logoutHandler}
                className={` ${
                  active === 3
                    ? "bg-[#8F5C2C]  border-b-4 border-[#40A4C8]"
                    : ""
                } text-white cursor-pointer h-full hover:bg-[#8F5C2C]  hover:border-b-4 hover:border-[#40A4C8] flex items-center justify-center px-3 `}
                to="/login"
              >
                
                Log Out
              </Link>
            </>
          ) : (
            <Link
              className={` ${
                active === 3 ? "bg-[#8F5C2C]  border-b-4 border-[#40A4C8]" : ""
              } text-white cursor-pointer h-full hover:bg-[#8F5C2C]  hover:border-b-4 hover:border-[#40A4C8] flex items-center justify-center px-3 `}
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
    // <nav className="bg-white border-gray-200 dark:bg-gray-900">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //     </a>
    //     <button
    //       onClick={toggleNavbar}
    //       type="button"
    //       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded={isOpen ? "true" : "false"}
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
    //       </svg>
    //     </button>
    //     <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <Link to="/" className={`block py-2 px-3 text-white ${active===1?"bg-blue-700":"hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700"}  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current="page">Home</Link>
    //         </li>
    //          <li>
    //           <Link to="/Order" className={`block py-2 px-3 text-white ${active===2?"bg-blue-700":"hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700"}  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}>Orders</Link>
    //         </li>
    //         <li>
    //           <Link to="/Login" className={`block py-2 px-3 text-white ${active===3?"bg-blue-700":"hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700"}  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}>Sign up</Link>
    //         </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
