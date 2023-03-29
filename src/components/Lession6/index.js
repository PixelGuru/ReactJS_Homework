import { useState } from "react";
import TextList from "./TextList";

function App() {
  const [formData, setformData] = useState({
    num: 0,
    text: "",
  });
  const onChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <div>Number :</div>
        <input
          type="number"
          name="num"
          value={formData.num}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <div>Text :</div>
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={onChange}
        />
      </div>
      <br />

      <TextList num={formData.num} text={formData.text} />
    </div>
  );
}

export default App;
