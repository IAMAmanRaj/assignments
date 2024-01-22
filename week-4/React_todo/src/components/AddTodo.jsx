import React from "react";

const AddTodo = ({ handleAddition }) => {
  function handleClick() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    if (title !== "" || description !== "") handleAddition(title, description);
  }

  return (
    <div>
      <input id="title" type="text" placeholder="Title.."></input>
      <br></br>
      <input id="description" type="text" placeholder="Description.."></input>
      <br></br>
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
