import React from "react";

// function Greet() {
//     return <h1>Hello Shubham</h1>
// }

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} and your age is {props.age}{" "}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
