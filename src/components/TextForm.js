import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase !!!", "success");
  };

  const handleLowClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase !!!", "success");
  };

  const handleClearClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Area Cleared !!!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleVowelCount = () => {
    var vowel_list = "aeiouAEIOU";
    var v_count = 0;

    for (var v = 0; v < text.length; v++) {
      if (vowel_list.indexOf(text[v]) !== -1) {
        v_count++;
      }
    }
    return v_count;
  };

  const extractEmails = () => {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          <b>{text.split(" ").length - 1}</b> Words and <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes Read
        </p>
        <p>
          Number of Vowels <b>{handleVowelCount()}</b>
        </p>
        <p>
          Number of Consonents <b>{text.length - handleVowelCount()}</b>
        </p>
        <p>
          Emails Extract: <b>{extractEmails()}</b>
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
      </div>
    </>
  );
}
