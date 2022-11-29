import React from "react";

import "../style/App.css";

const Button = () => {
  return (
    <div className="btn_div">
      <button className="btn1">Action</button>
      <button className="btn1">Adventure</button>
      <button className="btn1">Drama</button>
      <button className="btn1">Comedy</button>
      <button className="more">More</button>
    </div>
  );
};

export default Button;
