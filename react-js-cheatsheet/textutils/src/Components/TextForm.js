import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("upper case was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("lower case was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
            placeholder="Enter your text Here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          Words, {text.trim().length} Characters and{" "}
          {0.008 * text.split(" ").filter((value) => value !== "").length}{" "}
          Minutes Read{" "}
        </p>
        {/* <p>
          {text.split(" ").length} Words, {text.length} Characters and{" "}
          {0.008 * text.split(" ").length} Minutes Read
        </p> */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
