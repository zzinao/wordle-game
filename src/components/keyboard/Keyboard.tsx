import React from "react";
import KeyboardBlock from "../../elements/KeyboardBlock";

const keyArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keyArr2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keyArr3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "CLREAR"];

export const Keyboard = () => {
  return (
    <div className="my-10 mx-8">
      <div className="key_rows">
        {keyArr.map((key) => (
          <KeyboardBlock str={key} />
        ))}
      </div>
      <div className="key_rows">
        {keyArr2.map((key) => (
          <KeyboardBlock str={key} />
        ))}
      </div>
      <div className="key_rows">
        {keyArr3.map((key) => (
          <KeyboardBlock str={key} />
        ))}
      </div>
    </div>
  );
};
