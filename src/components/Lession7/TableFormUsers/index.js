import { Table } from "antd";
const TableFormUsers = ({ dataSource, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <div>
            <a
              onClick={() => {
                onEdit(item);
              }}
            >
              Edit
            </a>
            {` | `}

            <a
              onClick={() => {
                onDelete(item);
              }}
            >
              Delete
            </a>
          </div>
        );
      },
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};
export default TableFormUsers;
