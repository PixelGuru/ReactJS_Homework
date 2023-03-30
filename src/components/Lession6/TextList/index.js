import React, { useEffect, useState } from "react";
import { Li } from "./styled";

function TextList({ num, text }) {
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    if (num > 0 && text !== "") {
      const listItem = [];
      for (let i = 0; i < num; i++) {
        listItem.push(
          <Li>
            {i + 1}. {text}
          </Li>
        );
        setTextList(listItem);
      }
    } else {
      setTextList([]);
    }
  }, [num, text]);

  return (
    <div>
      <h2>Text List</h2>
      <ul>{textList}</ul>
    </div>
  );
}

export default TextList;
