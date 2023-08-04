import React from "react";

export default function TextForm(props) {
  return (
    <div class="mb-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" id="myBox" rows="10"></textarea>
    </div>
  );
}
