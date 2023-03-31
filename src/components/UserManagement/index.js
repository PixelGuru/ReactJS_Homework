import { useState, useEffect, useMemo } from "react";
import { Button, Modal } from "antd";
import TableFormUser from "./TableFormUser";
import ModalFormUser from "./ModalFormUser";
import { ButtonAdd, SearchBox } from "./styles";
import axios from "axios";

const DEFAULT_USER = { mane: "", email: "", phone: "" };
const UserManagement = () => {
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [submitLoading, setSubmitloading] = useState(false);
  const [itemloading, setItemloading] = useState(false);
  const [keyword, setKeyword] = useState("");

  const fetchData = () => {
    setTableLoading(true);
    axios
      .get("https://64263557d24d7e0de46baeb1.mockapi.io/User")
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCreate = () => {
    setFormData(DEFAULT_USER);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemloading(true);
    axios
      .get(`https://64263557d24d7e0de46baeb1.mockapi.io/User/${id}`)
      .then((res) => {
        setFormData(res.data);
        setOpen(true);
        setItemloading(false);
      });
  };

  const onDelete = (id) => {
    Modal.confirm({
      title: "Xóa dữ liệu này?",
      content: "Dữ liệu sẽ bị mất vĩnh viễn.",
      onOk() {
        setItemloading(true);
        axios
          .delete(`https://64263557d24d7e0de46baeb1.mockapi.io/User/${id}`)
          .then((res) => {
            setItemloading(false);
            fetchData();
          });
      },
    });
  };

  const onSubmit = (id, data) => {
    setSubmitloading(true);
    if (id) {
      axios
        .put(`https://64263557d24d7e0de46baeb1.mockapi.io/User/${id}`, data)
        .then((res) => {
          setSubmitloading(false);
          setFormData(DEFAULT_USER);
          setOpen(false);
          fetchData();
        });
    } else {
      axios
        .post("https://64263557d24d7e0de46baeb1.mockapi.io/User", data)
        .then((res) => {
          setSubmitloading(false);
          setFormData(DEFAULT_USER);
          setOpen(false);
          fetchData();
        });
    }
  };

  const onSreach = (e) => {
    setKeyword(e.target.value);
  };
  const sreachDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return (
          item.name.includes(keyword) ||
          item.email.includes(keyword) ||
          item.phone.includes(keyword)
        );
      });
    }
    return dataSource;
  }, [keyword, dataSource]);

  return (
    <div>
      <ButtonAdd>
        <Button onClick={onCreate}>New User</Button>
        <SearchBox onChange={onSreach} />
      </ButtonAdd>

      <ModalFormUser
        open={open}
        loading={submitLoading}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
      />

      <TableFormUser
        itemloading={itemloading}
        loading={tableLoading}
        dataSource={sreachDataSource}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};
export default UserManagement;
