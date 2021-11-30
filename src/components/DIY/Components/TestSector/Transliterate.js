import React, { useState } from "react";

import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

const Transliterate = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <ReactTransliterate
        renderComponent={(props) => <textarea {...props} />}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        lang="hi"
      />
    </div>
  );
};

export default Transliterate;
