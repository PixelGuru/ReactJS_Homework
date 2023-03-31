import { Table, Button } from "antd";

const TableBooks = ({ dataSource, loading, itemloading, onDelete, onEdit }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "30%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "30%",
    },
    {
      title: "Action",
      dataIndex: "div",

      render: (text, item) => {
        return (
          <div>
            <Button
              loading={itemloading}
              onClick={() => {
                onEdit(item.id);
              }}
            >
              Edit
            </Button>
            <Button
              disabled={itemloading}
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table loading={loading} dataSource={dataSource} columns={columns} />;
};

export default TableBooks;
