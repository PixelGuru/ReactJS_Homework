import { useState } from "react";

const Lession4 = () => {
  const [formData, setformData] = useState({
    fistname: "",
    lastname: "",
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        name="fistname"
        placeholder="Fist Name"
        value={formData.fistname}
        onChange={onChange}
      />
      <input
        name="lastname"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={onChange}
      />
      <div>{`Full name: ${formData.fistname} ${formData.lastname}`}</div>
    </div>
  );
};
export default Lession4;
