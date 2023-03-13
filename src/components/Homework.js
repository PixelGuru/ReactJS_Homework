import { useState } from "react";

const Homework = () => {
  const [data, setData] = useState([
    {
      name: "Product A",
      code: "123",
      price: "$10",
    },
    {
      name: "Product B",
      code: "456",
      price: "$20",
    },
  ]);
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <div> Product: {item.name}</div>
            <div> Code: {item.code}</div>
            <div> Price: {item.price}</div> <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default Homework;
