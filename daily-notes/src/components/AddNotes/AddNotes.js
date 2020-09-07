import React, { useState } from "react";

const AddNotes = (props) => {
  const initialStateValues = {
    titleNote: "",
    fecha: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(values);
    //reiniciamos los valores
    setValues({ ...initialStateValues });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Titulo de la nota"
            name="titleNote"
            onChange={handleInputChange}
            //con esto reiniciamos los valores
            value={values.titleNote}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="fecha"
            name="fecha"
            onChange={handleInputChange}
            //con esto reiniciamos los valores
            value={values.fecha}
          />
        </div>

        <div>
          <textarea
            name="description"
            rows="3"
            placeholder="agrega aqui tu nota"
            onChange={handleInputChange}
            //con esto reiniciamos los valores
            value={values.description}
          ></textarea>
        </div>

        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
