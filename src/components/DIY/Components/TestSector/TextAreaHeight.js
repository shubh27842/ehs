import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const TextAreaHeight = () => {
  const [editTextOne, setEditTextOne] = useState({
    value: "",
    rows: 5,
    minRows: 5,
    maxRows: 10,
  });

  const handleChange = (event) => {
    const textareaLineHeight = 24;
    const { minRows, maxRows } = editTextOne;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setEditTextOne({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };
  return (
    <div>
      <textarea
        rows={editTextOne.rows}
        value={editTextOne.value}
        placeholder={"Enter your text here..."}
        className={"textarea"}
        onChange={handleChange}
      />
      <TextareaAutosize />
    </div>
  );
};

export default TextAreaHeight;
