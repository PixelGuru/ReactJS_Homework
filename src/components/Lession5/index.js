import { useState } from "react";
import ListProducts from "./ListProducts";

const Lession5 = () => {
  const [users] = useState({
    name: "Nguyen Van A",
    email: "nguyenvana@gmail.com",
  });

  const [products] = useState([
    { name: "Product A", price: "15$" },
    { name: "Product B", price: "25$" },
  ]);

  return (
    <div>
      <div>
        <div>{`Khách hàng: ${users.name} có Email: ${users.email} `}</div>

        <ListProducts products={products} />
      </div>
    </div>
  );
};

export default Lession5;
