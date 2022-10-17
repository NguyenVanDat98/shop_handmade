import React from "react";
import { useForm } from "react-hook-form";
import InputFormVoucher from "./InputFormVoucher";

const FormCreateVoucher = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      expiry: "",
      code: "",
      discount: "",
      detail: "",
    },
  });
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <h4>CREATE VOUCHER</h4>
      <InputFormVoucher
        name="name"
        register={register}
require={(require = true)}
      />
      <InputFormVoucher
        name="day start"
        type={"date"}
        register={register}
        require={(require = true)}
      />
      <InputFormVoucher
        name="day_final"
        type={"date"}
        register={register}
        require={(require = true)}
      />
      <InputFormVoucher
        name="code"
        register={register}
        require={(require = true)}
      />
      <InputFormVoucher
        name="discount"
        register={register}
        require={(require = true)}
        type="number"
      />
      <div className="form-floating">
        <textarea
          {...register("detail")}
          className="form-control"
          cols={24}
          id="detail"
        />{" "}
        <label htmlFor="detail">Detail </label>{" "}
      </div>
      <button className="btn btn-success">CREATE</button>
    </form>
  );
};

export default FormCreateVoucher;
