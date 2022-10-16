import React from "react";

const InputFormVoucher = ({ type, name, register, required }) => {
  return (
    <div className="form-floating">
      <input
        className="form-control"
        autoComplete="off"
        type={type}
        id={name}
        {...register(name, { required })}
        name={name}
      />{" "}
      <label htmlFor={name}>{name} </label>{" "}
    </div>
  );
};

InputFormVoucher.defaultProps = {
  type: "text",
  required: { require: true },
};
export default InputFormVoucher;
