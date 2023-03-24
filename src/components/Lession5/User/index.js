const users = { users, setUsers };
const User = (props) => {
  return (
    <div>
      {users.map((item) => {
        return (
          <div>{`Name: ${item.props.name} Email: ${item.props.email}`}</div>
        );
      })}
    </div>
  );
};
export default User;
