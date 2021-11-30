import React from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import BaseText from "../EditableTextComponents/Basetext/basetext";

class TextClass extends React.Component {
  constructor() {
    super();
    this.state = {
      html: `<p>Hello World !</p><p>Paragraph 2</p>`,
      editable: true,
    };
  }
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h4", "h5", "h6", "u"],
    allowedAttributes: { a: ["href"] },
  };

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  };

  // toggleEditable = () => {
  //   this.setState({ editable: !this.state.editable });
  // };
  render() {
    return (
      <div>
        <ContentEditable
          style={{
            color: `${this.props.textColor}`,
            fontFamily: `${this.props.fontName}`,
            fontSize: `${this.props.fontSizeName}px`,
          }}
          className={`editable ${this.props.currentRadioFormatValue}`}
          tagName="pre"
          html={this.state.html} // innerHTML of the editable div
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
          onBlur={this.sanitize}
        />
        {/* <BaseText
          // sanitize={this.sanitize}
          props={this.props}
          // disabled={!this.state.editable}
        /> */}
      </div>
    );
  }
}

export default TextClass;
