import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      DELETE
    </button>
  );
}

export default DeleteButton;
