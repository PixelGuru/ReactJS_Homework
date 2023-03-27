const ListProducts = (props) => {
  return (
    <div>
      {props.products.map((item) => {
        return <div>{`đã mua: ${item.name} với giá: ${item.price}`}</div>;
      })}
    </div>
  );
};

export default ListProducts;
