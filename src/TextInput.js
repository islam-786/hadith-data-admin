import React from "react";

export default function TextInput(props) {
  const onChangeHandler = (event) => {
    props.onChange(props.label, event.target.value);
  };

  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input
        type="text"
        value={props.value[props.label]}
        onChange={onChangeHandler}
      />
    </div>
  );
}
