const Filter = (props) => {
  return (
    <div>
      filter shown with{" "}
      <input type="text" value={props.search} onChange={props.handleChange} />
    </div>
  );
};

export default Filter;
