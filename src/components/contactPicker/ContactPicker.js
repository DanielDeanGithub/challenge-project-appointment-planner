import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  return (
    <select onChange={onChange} value={value} name={name}></select>
  );
};
