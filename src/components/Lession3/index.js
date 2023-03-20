import { useState } from "react";

const Tong = () => {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState(0);

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);

    let tong = 0;
    for (let i of value) {
      tong += Number(i);
    }
    setSum(tong);
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
      <p>Tổng các số vừa nhập là: {sum}</p>
    </div>
  );
};

export default Tong;
