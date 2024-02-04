import React from "react";


function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete({ text, category });
  };

  

  return (
    <div className="task">
      <div className="category">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;