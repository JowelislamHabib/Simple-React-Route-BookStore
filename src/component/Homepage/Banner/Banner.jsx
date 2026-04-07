import React from "react";
import heroBook from "../../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="hero bg-base-200 rounded-3xl min-h-[500px] py-12 lg:py-0 overflow-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse w-full gap-16 lg:px-20">
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={heroBook} 
              className="max-h-[400px] w-auto drop-shadow-lg" 
              alt="Hero Book"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Books to freshen up your bookshelf
            </h1>
            <p className="text-lg opacity-80 max-w-lg">
              Explore our curated selection of literature that inspires, educates, and entertains. Find your next great read today.
            </p>
            <div className="pt-2">
              <button className="btn btn-primary px-8 rounded-lg font-bold">
                View The List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
