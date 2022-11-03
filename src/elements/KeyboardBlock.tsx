import React from "react";

interface IProps {
  str: string;
}

const KeyboardBlock = ({ str }: IProps) => {
  // return <div className="rounded-m m-px flex h-10 w-10 items-center justify-center uppercase bg-green">{str}</div>;
  return <div className="key">{str}</div>;
};

export default KeyboardBlock;
