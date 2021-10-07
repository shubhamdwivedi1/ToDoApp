import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      return;
    }
    setItems([...items, inputData]);
    setInputData("");
  };

  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((elem, ind) => ind != id);

    setItems(updateditems);
  };

  // const strikefunction = (id) => {
  //   const strikeditems = 
  // }

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Form</figcaption>
        </figure>
      </div>

      <div className="addItems">
        <input
          type="text"
          placeholder="Write Anything"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <div>
        <button className="btn" onClick={addItem}>
          <span>Add Form</span>
        </button>
      </div>

      <div className="showItems">
        {items.map((elem, ind) => {
          return (
            <div classname="eachItem" key={ind}>
              <h1>{elem}</h1>
              <input type="checkbox" onClick = {() => strikefunction(ind)} /> */}
              <button onClick={() => deleteItem(ind)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
