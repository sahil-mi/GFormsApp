const SelectBox = (props) => {
  const { name, options, onChange, index } = props;

  return (
    <div className="select-box-div">
      <select
        className="select-box"
        name={name}
        id={name}
        onChange={(e) => onChange(e, index)}
      >
        {options.map((item, index) => (
          <option className="select-box-option" value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
