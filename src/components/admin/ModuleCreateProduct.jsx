import React, { memo } from "react";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { PostProduct } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { ICONBACK, ICONCLOSE } from "../../Icon";
import { useForm } from "react-hook-form";
const InputForm =({name,type,required,register,disabled,value,children,errors})=>{
  return(
    <div className="item-input">
    <label htmlFor={name} >{name} {errors[name]?.type === 'required' && <span data-value={name + " is required"}  role="alert"> &#8505;</span>}</label>

    <input className="form-control" type={type} {...register(name, {required})} autoComplete="off" disabled={disabled} value={value} />
    {children}
    </div>
  )

}


InputForm.defaultValues={
  type:"text",
  disabled:false,
  value:""
}



const ModuleCreateProduct = ({
  check,
  disForm,
  listCategory,
  onclickClose,
  render,
}) => {
  const today = new Date(Date.now());
  const dateNow = `${today.getFullYear()}-${today.getMonth() + 1}-${
    today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
  }`;

  const {register ,handleSubmit, setValue ,formState :{ errors}} =useForm(
    {
      defaultValues:{
        discount:0,
        time_making:dateNow
      }
    }
  )
  const dispatch = useDispatch();

  const setTime =(time=1000)=>{
    setTimeout(() => {
      toast.dismiss();
    }, time);
  }

  const onSubmit =(data)=>{
    toast.loading("Waiting....!")
    console.log(data);
    const itemProduct = {
      ...data,
      price: parseInt(data.price),
      discount: parseInt(
        Number.isInteger(data.discount)
          ? data.discount
          : 0
      ),
      time_making: dateNow,
      status: true,
      sold: 0,
      rating: 0,
    };
    setTime()
    // dispatch(PostProduct(itemProduct));
    render();
  }
  return (
    <>
      {check && (
        <div className={`${disForm} module-create-product `}>
          <i
            onClick={() => {
              onclickClose();
            }}
            className={ICONCLOSE}
          ></i>
          <span> Create product</span>
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column " >
      
            <InputForm errors={errors} name="name" register={register} required={require=true}/>
            <InputForm errors={errors} name="price" type="number" register={register} required={require=true}/>
            <InputForm errors={errors} name="category" register={register} required={require=true}>
            <details >
                <summary><i className={ICONBACK}></i></summary>
                <ul>
                  {listCategory &&
                    listCategory.map((e, i) => (
                      <li key={i}   id={e}
                        onClick={(el) => {
                          setValue('category', e,{shouldDirty : true});
                          el.target.parentNode.parentNode.open=false
                        }}
                        value={e}
                      >
                        {e}
                      </li>
                    ))}
                </ul>
              </details>
            </InputForm>
            <InputForm errors={errors} name="img" register={register} required={require=true}/>
            <InputForm errors={errors} name="discount" type="number" register={register}/>
            <InputForm errors={errors} name="time_making" type="date" value={dateNow} register={register} disabled={true} />
    

            
            <button className="btn btn-primary" type="submit">Add</button>
          </form>
          
        </div>
      )}
    </>
  );
};

export default ModuleCreateProduct;
