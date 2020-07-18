import React from "react";

export default function TextInput(props) {
  const onChangeHandler = (event) => {
    props.onChange(props.label, event.target.value);
  };

  const styleData = { width: "95%", padding: "10px" };

  if (props.arabic) {
    if (props.longText) {
      styleData.height = "200px";
    }
    styleData.fontFamily = '"Amiri", serif';
    styleData.fontWeight = "500";
    styleData.fontSize = "20px";
  } else if (props.longText) {
    styleData.height = "200px";
  }

  return (
    <div>
      <label>{props.label}</label>
      <br />
      {props.longText || props.shortText ? (
        <textarea
          dir={props.arabic ? "rtl" : "ltr"}
          style={styleData}
          value={props.value[props.label]}
          onChange={onChangeHandler}
        ></textarea>
      ) : (
        <input
          dir={props.arabic ? "rtl" : "ltr"}
          style={styleData}
          type="text"
          value={props.value[props.label]}
          onChange={onChangeHandler}
        />
      )}
    </div>
  );
}
