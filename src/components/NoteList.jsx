import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <>
      {notes.length === 0 ? (
        <p>Note is empty</p>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default NoteList;
