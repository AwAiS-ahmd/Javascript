import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState({ title: "", content: "" });

  function getInfo(event) {
    const { name, value } = event.target;

    setText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form className="create-note-form">
        <input
          name="title"
          placeholder="Title"
          value={text.title}
          onChange={getInfo}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
          onChange={getInfo}
        />
        <button
          type="button"
          onClick={() => {
            props.onAdd(text);
            setText({ title: "", content: "" }); 

          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
export default Form;
