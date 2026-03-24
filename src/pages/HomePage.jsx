import React from "react";
import SubNav from "../components/SubNav";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-128 mt-6 w-3/4 bg-red-800 rounded-2xl ">
          <img
            src="/images/taskflow1.png"
            alt="img here"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
