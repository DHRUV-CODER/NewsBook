import React from "react";
import SpinnerGif from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={SpinnerGif} alt="Loading..." height="35" width="35" />
    </div>
  );
};

export default Spinner;
