import React, { useState } from "react";
import PropTypes from "prop-types";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { placeholder, name, onChange, label, errorMessage, pattern, type } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        className="custom-input"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
        type={type}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
      />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  pattern: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
