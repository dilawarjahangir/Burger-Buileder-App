import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";

const BurgerAnimation = () => {
  
  const cart = useSelector((state) => state.cart.cart);

  // Check if all quantities are zero
  const isCartEmpty = Object.values(cart).every(item => item.quantity === 0);

  return (
    <div className="w-full h-[400px] flex flex-col justify-start items-center overflow-y-auto pt-10">
      <div className="h-[431px] py-3 pb-4 w-full flex flex-col items-center">
        <div className="relative m-1 w-[360px] min-h-[80px] bg-gradient-to-r from-[#e36f09] to-[#9f5603] custom-rounded">
          <div className="absolute top-2/4 left-5 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
          <div className="absolute top-1/3 left-1/3 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
          <div className="absolute top-1/3 left-1/2 w-7 h-3 bg-white rounded-full transform rotate-45"></div>
          <div className="absolute top-1/2 left-2/3 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
          <div className="absolute top-1/2 right-4 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
        </div>

        {isCartEmpty ? (
          <div className="w-full text-center text-lg my-10">
            No ingredients added
          </div>
        ) : (
          <>
            {cart.Lettuce && [...Array(cart.Lettuce.quantity)].map((_, index) => (
              <div key={`Lettuce-${index}`} className="w-[382px] m-1 h-[28px] bg-gradient-to-r from-green-400 to-green-600 lettuce-rounded text-transparent">
                Lettuce
              </div>
            ))}
            {cart.Bacon && [...Array(cart.Bacon.quantity)].map((_, index) => (
              <div key={`Bacon-${index}`} className="w-[360px] m-1 h-[12px] bg-gradient-to-r bg-[#9e0e0e] text-transparent">
                Bacon
              </div>
            ))}
            {cart.Cheese && [...Array(cart.Cheese.quantity)].map((_, index) => (
              <div key={`Cheese-${index}`} className="w-[405px] m-1 h-[18px] bg-gradient-to-r bg-[#e1e72e] lettuce-rounded text-transparent">
                Cheese
              </div>
            ))}
            {cart.Meat && [...Array(cart.Meat.quantity)].map((_, index) => (
              <div key={`Meat-${index}`} className="w-[360px] m-1 h-[32px] bg-[#703B09] lettuce-rounded text-transparent">
                Meat
              </div>
            ))}
           
          </>
        )}
         
         <div className="w-[360px] mb-3 m-1 min-h-[52px] bg-[#de752f] close-rounded text-transparent">
              Bun
            </div>
      </div>
    </div>
  );
};

export default BurgerAnimation;
