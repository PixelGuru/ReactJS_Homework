import { useState } from "react";
import ModalFormUsers from "./ModalFormUsers";
import TableFormUsers from "./TableFormUsers";
import { Button, Modal } from "antd";

const DEFAULT_USER = { name: "", email: "", phone: "" };
const Lession7 = () => {
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  const onCreate = () => {
    setFormData(DEFAULT_USER);
    setOpen(true);
  };

  const onEdit = (user) => {
    setFormData(user);
    setOpen(true);
  };
  const onDelete = (item) => {
    Modal.confirm({
      title: "Xóa dữ liệu này?",
      content: "Dữ liệu sẽ bị mất vĩnh viễn.",
      onOk() {
        const newUser = dataSource.filter((user) => {
          return user.id !== item.id;
        });

        setDataSource(newUser);
      },
    });
  };
  const onSubmit = (id, data) => {
    if (id) {
      const newDataSource = dataSource.map((item) => {
        return item.id === id ? { id: id, ...data } : item;
      });

      setDataSource(newDataSource);
    } else {
      setDataSource([
        ...dataSource,
        {
          id: Math.random(),
          ...data,
        },
      ]);
    }

    setFormData(DEFAULT_USER);
    setOpen(false);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <ModalFormUsers
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
        onChange={onChange}
      />
      <Button onClick={onCreate}>New User</Button>

      <TableFormUsers
        dataSource={dataSource}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};
export default Lession7;
