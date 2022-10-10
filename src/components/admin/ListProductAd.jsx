import React , { useEffect,useState, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICONADD } from "../../Icon";
import {
  fetchDataProduct,  
} from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { ItemProductAd } from "./../index.js";
import InfoProduct from "./InfoProduct";
import ModuleCreateProduct from "./ModuleCreateProduct";
import ModuleListSlider from "./ModuleListSlider";

const ListProductAd = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adminData.dataProduct);
  const [render, setRender] = useState(true);
  const [productSelect, setProductSelect] = useState("");
  const [disForm, setDisForm] = useState({
    formCreate: false,
    moduleSlide: false,
  });
  const [anima, setAnimation] = useState({
    formCreate: "disTrue",
    moduleSlide: "animation-list-slider-on",
  });
  const [dataOutput, setDataOutput] = useState([]);
  useEffect(() => {
    dispatch(fetchDataProduct());
  }, [render]);

  const handleChangeFilter = (e) => {
    const temp = dataDevide.filter((item) => item.name === e.target.value);
    temp.length ? setDataOutput(temp) : setDataOutput(dataDevide);
  };
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
  // divide dat flow category
  const dataDevide = useMemo(() =>
      listCategory.map((e, i) =>({
          name: e,
          data: data.filter((el) => el.category.toLowerCase() === e),
      })),
    [data]
  );
  //set data when data update
  useEffect(() => {
    setDataOutput(dataDevide);
  }, [dataDevide]);

  return (
    <div className="list-product-Ad viewFirst ">
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
      <ModuleCreateProduct
        check={disForm.formCreate}
        listCategory={listCategory}
        onclickClose={()=>{
          setAnimation({...anima,formCreate:"disFalse"})
          setTimeout(() => {            
            setDisForm({...disForm,formCreate:!disForm.formCreate})
          }, 500);
        }}
          disForm={anima.formCreate}
        render={() => {
          setRender(!render);
        }}
      />

      <ModuleListSlider
        check={disForm.moduleSlide}
        data={productSelect}
        onclickClose={()=>{
          setAnimation({...anima,moduleSlide:"animation-list-slider-off"})
          setTimeout(() => {
            setDisForm({...disForm,moduleSlide:!disForm.moduleSlide})            
          }, 500);        
        }}
        disForm={anima.moduleSlide}
      />
      <div className="main-list">
        <div className="list-product-Ad_header">
          <button
            onClick={() => {
              if(!disForm.formCreate){
                  setAnimation({...anima,formCreate:"disTrue"})
                  setDisForm({ ...disForm, formCreate: !disForm.formCreate});
              }else{
                  setAnimation({...anima,formCreate:"disFalse"})
                  setTimeout(() => {
                    setDisForm({ ...disForm, formCreate: !disForm.formCreate});
                  }, 500);
              }
            }}
          >
            <i className={ICONADD}> </i> ADD PRODUCT
          </button>
          <button
            onClick={() => {
              if (!disForm.moduleSlide) {
                setAnimation({...anima,moduleSlide:"animation-list-slider-on"})
                setDisForm({ ...disForm,moduleSlide:!disForm.moduleSlide });
                
              }else{
                setAnimation({...anima,moduleSlide:"animation-list-slider-off"})
                setTimeout(() => {
                  setDisForm({ ...disForm,moduleSlide:!disForm.moduleSlide });
                  
                }, 500);
              }
            }}
          >
            <i className={ICONADD}> </i> LIST SLIDER
          </button>
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
        {dataOutput &&
          dataOutput.map((e, i) => {
            return (
              <div key={i} className="list-allProduct">
                <div className=" d-flex justify-content-between line-title">
                  <span>{e.name}</span>
                  <span>({e.data.length})</span>
                </div>
                <div className="main-content-list-product ">
                  {e.data.map((item, i) => (
                    <ItemProductAd
                      handleSelect={() => {
                        setProductSelect(item);
                      }}
                      data={item}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListProductAd;
