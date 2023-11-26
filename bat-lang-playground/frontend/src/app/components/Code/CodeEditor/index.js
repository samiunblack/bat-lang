import React from "react";

import dynamic from "next/dynamic";
import { highlight } from "prismjs";

import { batlangSyntax } from "../../common/syntax";

import "../../../prism-tomorrow.css";


const Editor = dynamic(() => import("react-simple-code-editor"), {
  ssr: false,
});


const CodeEditor = (props) => {
  const { handleChange, code } = props;

  const highlightWithLineNumbers = (input) =>
    highlight(input, batlangSyntax, "batlang")
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join("\n");

  return (
    <div className="playground-editor group">
      {/* Wrapping Editor component in a separate div to control its height and overflow */}
      <div className="editor-container">
        <Editor
          value={code}
          onValueChange={(code) => handleChange(code)}
          highlight={(code) => highlightWithLineNumbers(code)}
          padding={10}
          textareaClassName="codeArea"
          className="editor"
          id="codeEditor"
          style={{
            fontFamily: "monospace",
            fontSize: 16,
          }}
        />
      </div>
    </div>
  );
};
export default React.memo(CodeEditor);


