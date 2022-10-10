import React, { memo, useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICONCLOSE } from "../../Icon";
import { GetSlideShow, PutSlideShow } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { SAVE_LIST_SLIDER } from "../../redux/adminReducer/actionTypeAd";


const ModuleListSlider = ({ data, check, onclickClose, disForm, }) => {
  const [editSlider, setEditSlider] = useState(false)
  const [btnOff, setBtn] = useState("buttonOn")
  const dispatch = useDispatch()
  const dataSlider = useSelector(state => state.adminData.slideShow)


  //  const newlistSlide = useMemo(()=>{
  //       return dataSlider

  //   // const validData = dataSlider.findIndex(e=>e.id==data.id)
  //   // return (validData==-1&&editSlider==true)?dataSlider.push(data):dataSlider
  //  },[dataSlider])
  useEffect(() => {
    dispatch(GetSlideShow())
  }, [])
  const handleDeleteItemSlideShow = (event) => {
    dataSlider.splice(event, 1)
    dispatch(PutSlideShow(dataSlider))
    setEditSlider(false)

  }

  return (
    <>
      {check && (
        <div className={`${disForm} module-list-slider `}>
          <div className="header-module-info">
            <i onClick={() => {
              onclickClose()

            }} className={ICONCLOSE}></i>
            <button onClick={() => {
              if (editSlider == false) {
                setBtn("buttonOn")
                setEditSlider(!editSlider)
              } else {
                setBtn("buttonOff")
                setTimeout(() => {
                  setEditSlider(!editSlider)
                }, 500);
              }

            }}>Edit</button>
            <button> Save</button>
          </div>
          <div className="section">
            {dataSlider && dataSlider.map((e, i) => {
              return (
                <div className="item-slider" key={i}>
                  <div className="img">
                    <img src={e.img} />
                  </div>
                  <div className="item-slider-detail">
                    <h6>{e.name}</h6>
                    <p>{e.price}</p>
                  </div>
                  {editSlider && <span onClick={() => { handleDeleteItemSlideShow(i) }} className={`${btnOff}`} style={{ "--in": `${i / 10}s` }}>
                    <i className={ICONCLOSE}></i>
                  </span>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

ModuleListSlider.defaultProps = {
}
export default ModuleListSlider;
