import React from "react";

const PropsPractice = (props) => {
  return (
    <div>
      <h1>
        Welcome {props.name} and Your Passion is {props.passion}
      </h1>
      {props.children}
    </div>
  );
};

export default PropsPractice;
