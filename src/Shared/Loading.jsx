import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen bg-error flex">
        <div className="mx-auto my-auto mt-40">
            <p className="text-5xl font-link text-white my-10 text-center -ml-10">allBirds</p>
      <HashLoader color="#ffffff" size={70} />

        </div>
    </div>
  );
};

export default Loading;
