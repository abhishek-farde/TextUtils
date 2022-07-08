import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const ConvertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const ConvertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const copyText = () => {
    // navigator.clipboard.writeText(text);
    let copyText = document.getElementById("myText");
    copyText.select();
    navigator.clipboard
      .writeText(text)
      .then(() => {
        props.setAlert("successfully copied to clipboard", "success");
      })
      .catch(() => {
        props.setAlert("something went wrong", "warning");
      });
  };

  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  let noOfWords = text.split(" ").length;

  return (
    <div
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <div className="container my-4">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myText"
            rows="6"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <div className="row container">
          <button
            className="btn btn-primary ms-4 mt-1 col-sm-6 col-md-4 col-lg-2"
            onClick={ConvertToUpperCase}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary ms-4 mt-1 col-sm-6 col-md-4 col-lg-2"
            onClick={ConvertToLowerCase}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary ms-4 mt-1 col-sm-6 col-md-4 col-lg-2"
            onClick={removeSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary ms-4 mt-1 col-sm-6 col-md-4 col-lg-2"
            onClick={clearText}
          >
            Clear
          </button>
          <button
            className="btn btn-primary ms-4 mt-1 col-sm-6 col-md-4 col-lg-2"
            onClick={copyText}
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
      <div className="container">
        <h3>Your text summary:</h3>
        <p>
          {noOfWords} words and {text.length} characters
        </p>
        <p>{Math.ceil(0.008 * noOfWords)} minutes read</p>
      </div>
    </div>
  );
}
