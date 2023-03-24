import { useState } from "react";
import User from "./User";

const Lession5 = () => {
  const [users] = useState();
  return (
    <div>
      <User users={users} />
    </div>
  );
};
export default Lession5;
