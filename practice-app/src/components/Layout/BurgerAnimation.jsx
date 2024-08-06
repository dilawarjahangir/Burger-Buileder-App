import React from "react";
import "../../App.css"
const BurgerAnimation = () => {
  return (
    <div classNameName="h-[450px] w-full flex justify-center items-start">
      <div className="w-full flex flex-col justify-center items-center pt-10">
          <div className="relative m-1 w-[360px] h-[80px] bg-gradient-to-r from-[#e36f09] to-[#9f5603] custom-rounded">
            <div className="absolute top-2/4 left-5 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
            <div className="absolute top-1/3 left-1/3 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
            <div className="absolute top-1/3 left-1/2 w-7 h-3 bg-white rounded-full transform rotate-45"></div>
            <div className="absolute top-1/2 left-2/3 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
            <div className="absolute  top-1/2 right-4 w-7 h-3 bg-white rounded-full transform rotate-12"></div>
          </div>
          <div class="w-[382px] m-1 h-[28px] bg-gradient-to-r from-green-400 to-green-600 lettuce-rounded text-transparent" >.</div>
          <div class="w-[360px] m-1 h-[12px] bg-gradient-to-r bg-[#9e0e0e]  text-transparent" >.</div>
          <div class="w-[405px] m-1 h-[18px] bg-gradient-to-r bg-[#e1e72e] lettuce-rounded  text-transparent" >.</div>
          <div class="w-[360px] m-1 h-[32px] bg-[#703B09] lettuce-rounded  text-transparent" >.</div>
          <div class="w-[360px] m-1 h-[52px] bg-[#de752f] close-rounded  text-transparent" >.</div>
        </div>
    </div>
  );
};

export default BurgerAnimation;
