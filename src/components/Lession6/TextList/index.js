import React from "react";
import { Li } from "./styled";

function textList({ num, text }) {
  const textList = [];

  for (let i = 0; i < num; i++) {
    textList.push(
      <Li>
        {i + 1}. {text}
      </Li>
    );
  }

  return (
    <div>
      <h2>Text List</h2>
      <ul>{textList}</ul>
    </div>
  );
}

export default textList;
