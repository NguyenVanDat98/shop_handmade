import React, { memo } from "react";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { PostProduct } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { ICONBACK, ICONCLOSE } from "../../Icon";


const InputFormCreate = 
  memo(({ refName, name, handleInputValue, type }) => {
    return (
      <input
        name={name}
        ref={refName}
        onChange={handleInputValue}
        className="form-control"
        autoComplete="off"
        type={type}
        id={name}
      />
    );
  })
;
InputFormCreate.propTypes  = {
  type: PropTypes.string,
  refName: PropTypes.object ,
  handleInputValue: PropTypes.func,
  name: PropTypes.string ,
};
InputFormCreate.defaultProps = {
  type: "text",
};


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
  const [formCreateValue, setForm] = useState({
    name: "",
    price: 0,
    category: "",
    img: "",
    discount: 0,
    description: "",
  });
  const dispatch = useDispatch();
  const refName = useRef();
  const refPrice = useRef();
  const refCategory = useRef();
  const refImg = useRef();
  const refDiscount = useRef();
  const handleInputValue = (e) => {
    setForm({
      ...formCreateValue,
      [e.target.name]:
        e.target.type !== "number"
          ? e.target.value
          : parseFloat(e.target.value),
    });
  };
  const setTime =(time=1000)=>{
    setTimeout(() => {
      toast.dismiss();
    }, time);
  }
  const handleAddProduct = () => {
    toast.loading("Creating....");
    switch ("") {
      case refName.current.value:
        refName.current.focus();
        toast.error( refName.current.innerHTML)
        setTime()
        break;
      case refPrice.current.value:
        refPrice.current.focus();
        toast.error( refPrice.current.innerHTML)
        setTime()
        break;
      case refCategory.current.value:
        refCategory.current.focus();
        toast.error( refCategory.current.innerHTML)
        setTime()
        break;
      case refImg.current.value:
        refImg.current.focus();
        toast.error( refImg.current.innerHTML)
        setTime()
        break;

      default:
        const itemProduct = {
          ...formCreateValue,
          price: parseInt(formCreateValue.price),
          discount: parseInt(
            Number.isInteger(formCreateValue.discount)
              ? formCreateValue.discount
              : 0
          ),
          time_making: dateNow,
          status: true,
          sold: 0,
          rating: 0,
        };
        for (const key in formCreateValue) {
          if (Object.hasOwnProperty.call(formCreateValue, key)) {
            formCreateValue[key] = "";
          }
          setForm(formCreateValue);
        }
        dispatch(PostProduct(itemProduct));
        refName.current.value = "";
        refImg.current.value = "";
        refCategory.current.value = "";
        refPrice.current.value = 0;
        refDiscount.current.value = 0;
        render();
        break;
    }
  };

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
          <form className="d-flex flex-column ">
            <div className="item-input">
              <InputFormCreate
                name={"name"}
                handleInputValue={handleInputValue}
                refName={refName}
              />

              <label htmlFor="name">Name product </label>
            </div>
            <div className="item-input">
              <InputFormCreate
                name={"price"}
                handleInputValue={handleInputValue}
                refName={refPrice}
                type={"number"}
              />

              <label htmlFor="price">Price </label>
            </div>
            <div className="item-input">
              <InputFormCreate
                name={"category"}
                handleInputValue={handleInputValue}
                refName={refCategory}
              />

              <details>
                <summary>
                    <i className={ICONBACK}></i>
                </summary>
                <ul>
                  {listCategory &&
                    listCategory.map((e, i) => (
                      <li
                        key={i}
                        id={e}
                        onClick={(el) => {
                          el.target.parentNode.parentNode.open = false;
                          setForm({
                            ...formCreateValue,
                            category: el.target.innerHTML,
                          });
                        }}
                        value={e}
                      >
                        {e}
                      </li>
                    ))}
                </ul>
              </details>
              <label htmlFor="category">Category </label>
            </div>
            <div className="item-input">
              <InputFormCreate
                name={"img"}
                handleInputValue={handleInputValue}
                refName={refImg}
              />
              <label htmlFor="img">Img link </label>
            </div>
            <div className="item-input">
              <InputFormCreate
                name={"discount"}
                handleInputValue={handleInputValue}
                refName={refDiscount}
              />

              <label htmlFor="discount">Discount </label>
            </div>
            <div className="item-input">
              <input
                name="time_making"
                className="form-control"
                autoComplete="off"
                type="date"
                readOnly
                id="time_making"
                value={dateNow}
              />
              <label htmlFor="time_making">Date making </label>
            </div>
            <button
              type="button"
              onClick={handleAddProduct}
              className="btn btn-primary"
            >
              ADD
            </button>
          </form>
          
        </div>
      )}
    </>
  );
};

export default ModuleCreateProduct;
