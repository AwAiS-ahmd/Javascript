import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

function KeeperManager() {
  const [keepNote, setKeepNote] = useState([]);

  function addInfo(text) {
    setKeepNote((prevValue) => [...prevValue, text]);
  }
  return (
    <>
      <Navbar />
      <Header />
      <Form onAdd={addInfo} />
      {keepNote.map((note, index) => {
        return (
          <div>
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
            />
          </div>
        );
      })}
      <Footer />
    </>
  );
}
export default KeeperManager;
