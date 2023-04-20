import React from "react";

export const SelectBox = ({
  label = "",
  options = [],
  value = "",
  onChange = () => false,
}) => {
  return (
    <div>
      <label>{label}: </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt, key) => {
          return (
            <option key={key} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
