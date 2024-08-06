import React from "react";

const BurgerMaking = () => {
  return (
    <div className="bg-[#CF8F2E] w-full h-[400px] flex-col items-center justify-center p-5 ">
      <div className="text-center">
        <h1 className=" text-lg">
          Current Price: <strong>3$</strong>
        </h1>
      </div>
      <div className=" flex items-center justify-center ">
        <div className=" p-8">
          <div className="space-y-4">
            {["Lettuce", "Bacon", "Cheese", "Meat"].map((item) => (
              <div key={item} className="flex  w-[280px]  justify-between items-center">
                <span className="font-bold my-2 text-black">{item}</span>
                <div>
                  <button className="hover:bg-[#DAA972] bg-[#D39952] text-center mx-2 w-[80px] p-1 border-black h-[32px] text-white px-4">
                    Less
                  </button>
                  <button className="hover:bg-[#99703F] bg-[#8F5E1E] text-center mx-2 w-[80px] p-1 border-black h-[32px] text-white px-4">
                    More
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-8 rounded">
                SIGN UP TO ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMaking;
