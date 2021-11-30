import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

const Test = () => {
  const [stateTwo, setStateTwo] = useState({
    html: `<p>Hello World !</p><p>Paragraph 2</p>`,
    editable: true,
  });

  const [ref, setRaf] = useState(null);
  const innerRef = React.useRef(null);
  const handleChange = (evt) => {
    setStateTwo({ html: evt.target.value, editable: true });
  };
  // const defaultOptions = {
  //   allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
  //   allowedAttributes: {
  //     'a': [ 'href' ]
  //   },
  //   allowedIframeHostnames: ['www.youtube.com']
  // };

  // sanitizeConf = {
  //   allowedTags: ["b", "i", "em", "strong", "a", "p", "h4", "h5", "h6", "u"],
  //   allowedAttributes: { a: ["href"] },
  // };

  // const sanitize = () => {
  //   setStateTwo({
  //     html: sanitizeHtml(stateTwo.html, {
  //       allowedTags: [
  //         "b",
  //         "i",
  //         "em",
  //         "strong",
  //         "a",
  //         "p",
  //         "h4",
  //         "h5",
  //         "h6",
  //         "u",
  //       ],
  //       allowedAttributes: {
  //         a: ["href", "target"],
  //       },
  //     }),
  //     editable: true,
  //   });
  // };

  return (
    <div>
      <ContentEditable
        className={`editable`}
        tagName="pre"
        html={stateTwo.html} // innerHTML of the editable div
        // disabled={!stateTwo.editable} // use true to disable edition
        // onChange={handleChange} // handle innerHTML change
        // onBlur={sanitize}
        // innerRef={(elt) => setRaf((innerRef.current = elt))}
      />
    </div>
  );
};

export default Test;
