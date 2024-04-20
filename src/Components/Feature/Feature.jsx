import React from 'react';

const Feature = () => {
  return (
    <div className='px-10 flex justify-center mb-20 mt-10'>
      <div className="max-w-screen-lg w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-[88px]">
        <div className="flex flex-col justify-start items-center gap-6">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 left-0 top-0 absolute">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
              <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full"></div>
            </div>
            <div className="w-10 h-10 left-[20px] top-[20px] absolute"></div>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h3 className="text-black text-xl font-semibold font-Poppins leading-7">FREE AND FAST DELIVERY</h3>
            <p className="text-center text-black text-sm font-normal font-Poppins leading-[21px]">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-6">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 left-0 top-0 absolute">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
              <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full"></div>
            </div>
            <div className="w-10 h-10 left-[20px] top-[20px] absolute"></div>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h3 className="text-black text-xl font-semibold font-Poppins leading-7">24/7 CUSTOMER SERVICE</h3>
            <p className="text-black text-sm font-normal font-Poppins leading-[21px]">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-6">
          <div className="w-20 h-20 relative">
            <div className="w-20 h-20 left-0 top-0 absolute">
              <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
              <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full"></div>
            </div>
            <div className="w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center flex">
              <div className="w-10 h-10 relative"></div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <h3 className="text-black text-xl font-semibold font-Poppins leading-7">MONEY BACK GUARANTEE</h3>
            <p className="text-black text-sm font-normal font-Poppins leading-[21px]">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
