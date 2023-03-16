import { useState } from "react";

const Tong = () => {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState(0);

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);

    let tong = 0;
    for (let digit of value) {
      tong += Number(digit);
    }
    setSum(tong);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <p>Tong vừa nhập là: {sum}</p>
    </div>
  );
};

export default Tong;
