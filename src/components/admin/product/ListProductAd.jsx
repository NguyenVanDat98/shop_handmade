import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PutDataCategory } from "../../../api/adminMethodAip";
import { SortProduct } from "../../../common/common";
import { ICONADD } from "../../../Icon";
import {InfoProduct, ItemProductAd, ModuleCreateProduct,ModuleListSlider} from "./../../index";
import ItemCategory from "./ItemCategory";

const ListProductAd = (props) => {
  const data = useSelector((state) => state.adminData.dataProducts);
  const [productSelect, setProductSelect] = useState("");
  const dispatch= useDispatch()
  const [disForm, setDisForm] = useState({
    formCreate: false,
    moduleSlide: false,
  });
  const [anima, setAnimation] = useState({
    formCreate: "disTrue",
    moduleSlide: "animation-list-slider-on",
  });
  const [dataOutput, setDataOutput] = useState([]);

//handle sort

// const handleSort =(item)=>{
//    item.sort((a,b)=>b.price - a.price)
//    console.log(item);
// }
  //Filter category
  let listCategory = useMemo(() => {
    let arr = [];
    for (const key in data) {
      if (!arr.includes(data[key].category.toLowerCase())) {
        arr.push(data[key].category.toLowerCase());
      }
    }
    return arr;
  }, [data]);
  // divide data flow category
  const dataDevide = useMemo(
    () =>
      listCategory.map((e, i) => ({
        name: e,
        data: data.filter((el) => el.category.toLowerCase() === e),
      })),
    [data, listCategory]
  );
  const updataCategory =()=>{
      dispatch(PutDataCategory(listCategory))
  }
  //set data when data update
  useEffect(() => {
    setDataOutput(dataDevide);
  }, [dataDevide]);
  const handleChangeFilter = (e) => {
    const temp = dataDevide.filter((item) => item.name === e.target.value);
    temp.length ? setDataOutput(temp) : setDataOutput(dataDevide);
  };
  const handleClick = (a, b) => {
    if (disForm[a] === false) {
      if (disForm[b] === true) {
        setAnimation({ [a]: "animation-list-slider-on", [b]: "disFalse" });
        setTimeout(() => {
          setDisForm({ [a]: true, [b]: false });
        }, 500);
      } else {
        setAnimation({ ...anima, [a]: "animation-list-slider-on" });
        setDisForm({ ...disForm, [a]: true });
      }
    } else {
      setAnimation({ ...anima, [a]: "animation-list-slider-off" });
      setTimeout(() => {
        setDisForm({ ...disForm, [a]: false });
      }, 500);
    }
  };

  return (
    <div className="list-product-Ad">
{/* {-----------------------module infomation product select------------------} */}

      {productSelect && (
        <InfoProduct
          handleClose={() => {
            setTimeout(() => {
              setProductSelect("");
            }, 500);
          }}
          data={productSelect}
        />
      )}
{/* {-----------------------module Create new product------------------} */}

      <ModuleCreateProduct
        check={disForm.formCreate}
        listCategory={listCategory}
        onclickClose={() => {
          setAnimation({ ...anima, formCreate: "disFalse" });
          setTimeout(() => {
            setDisForm({ ...disForm, formCreate: !disForm.formCreate });
          }, 500);
        }}
        disForm={anima.formCreate}
      />
{/* {-----------------------module slider------------------} */}
      <ModuleListSlider
        check={disForm.moduleSlide}
        data={productSelect}
        onclickClose={() => {
          setAnimation({ ...anima, moduleSlide: "animation-list-slider-off" });
          setTimeout(() => {
            setDisForm({ ...disForm, moduleSlide: !disForm.moduleSlide });
          }, 500);
        }}
        disForm={anima.moduleSlide}
      />
      <div className="main-list">
        <div className="list-product-Ad_header">
{/* {---------------------------------BUTTON--------------------------} */}
{/* {button add new product} */}
          <button
            onClick={() => {
              handleClick("formCreate", "moduleSlide");
            }}
          >
            <i className={ICONADD}> </i> ADD PRODUCT
          </button>
{/* {---------------------------------BUTTON--------------------------} */}
{/* {button view list silder} */}
          <button
            onClick={() => {
              handleClick("moduleSlide", "formCreate");
            }}
          >
            <i className={ICONADD}> </i> LIST SLIDER
          </button>
          {/* {list category} */}
          <select
            onChange={(e) => handleChangeFilter(e)}
            className="form-select"
            name=""
          >
            <option defaultValue>ALL CATEGORY</option>
            {listCategory &&
              listCategory.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
          </select>
        </div>
{/* {-----------------------list product render------------------} */}
        {dataOutput &&
          dataOutput.map((e, i) => {
            // const [data ,setData]=useState(e.data)
            // const handleSort =(item)=>{
            //    setData(SortProduct(e.data,item))
            // }
            return (
              <ItemCategory key={i} setProductSelect={(av)=>setProductSelect(av)} e={e}/>
              // <div key={i} className="list-allProduct">
              //   <div className=" d-flex justify-content-between line-title">
              //     <span>{e.name}</span>
                  
              //     <span>({e.data.length})</span>
              //   </div>
              //   <div className="main-content-list-product ">
              //     {e.data.map((item, i) => (
              //       <ItemProductAd
              //         handleSelect={() => {
              //           setProductSelect(item);
              //         }}
              //         data={item}
              //         key={i}
              //       />
              //     ))}
              //   </div>
              // </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListProductAd;
