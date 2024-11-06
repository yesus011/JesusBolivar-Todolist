import React from "react";

function TodoList({ value, handleDelete, id }) {
  return (
    <>
      <div className="task d-flex align-items-center justify-content-between">
        <p className="fs-3">{value}</p>
        <span className="me-3" onClick={() => handleDelete(id)}>X</span>
      </div>

    </>
  )
}

export default TodoList