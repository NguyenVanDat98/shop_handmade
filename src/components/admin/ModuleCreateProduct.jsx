import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { PostProduct } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { ICONBACK, ICONCLOSE } from "../../Icon";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
}) => {
  const today = new Date(Date.now());
  const dateNow = `${today.getFullYear()}-${today.getMonth() + 1}-${
    today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
  }`;
  const [clazz,setClazz]=useState("")
  const {register ,handleSubmit, setValue,getValues ,formState :{ errors}} =useForm(
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
  const blurBtn =(e)=>{
   const check= getValues(["name","price","img","category"]).includes("");
     console.log(check);
     if(check){
      if(clazz===""|| clazz==="moveleft"){
        setClazz("moveRight")

      }else{
        setClazz("moveleft")
      }
     }else{
      setClazz("")
     }
  }

  const onSubmit =(data)=>{
    toast.loading("Waiting....!")
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
    setValue("name","")
    setValue("price","")
    setValue("category","")
    setValue("img","")
    setValue("discount",0)
    dispatch(PostProduct(itemProduct));
  }
  return (
    <>
      {check && (
        <div className={`${disForm} module-create-product `}>
          <header>
            <i
            onClick={() => {
              onclickClose();
            }}
            className={ICONCLOSE}
          ></i>
          <span> Create product</span>
          </header>
          
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
            <button onMouseOver={()=>blurBtn( )} className={`btn btn-primary ${clazz}`} type="submit">ADD</button>
          </form>
          
        </div>
      )}
    </>
  );
};

export default ModuleCreateProduct;
