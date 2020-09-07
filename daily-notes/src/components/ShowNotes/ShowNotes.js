import React, { useEffect, useState } from "react";
import AddNotes from "../AddNotes/AddNotes.js";
import { db } from "../../firebase.js";

const ShowNotes = () => {
  const [notes, setNotes] = useState([]);
  const addTask = async (noteObject) => {
    await db.collection("notes").doc().set(noteObject);
    console.log("Nueva tarea agregada", noteObject);
  };
  const getNotes = () => {
    db.collection("notes").onSnapshot((querySanpshot) => {
      const docs = [];

      querySanpshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setNotes(docs);
    });
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div>
        <AddNotes addTask={addTask} />
      </div>
      <div>
        {notes.map((link) => (
          <div>
            <h4>{link.titleNote}</h4>
            <h5>{link.fecha}</h5>
            <p>{link.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowNotes;
