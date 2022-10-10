import toast from "react-hot-toast";
import {
  GetDataProduct,
  GetDataSlideShow,
  PostDataProduct,
  PutDataProduct,
  PutDataSlideShow,
} from "../../../api/adminMethodAip";
import { reRender, saveSlideShow, SetDataProduct } from "../adminAction";

export const fetchDataProduct = () => {
  return (dispatch) => {
    (async () => {
      try {
         await GetDataProduct()
          .then((res) => res.status === 200 && res.json())
          .then((res) => {
            dispatch(SetDataProduct(res));
          })
          .catch((error) => {
            toast.error(`${error.message}`);
          });
      } catch (error) {
        toast.error(`${error}`);
      }
    })();
  };
};
export const PostProduct = (data) => {
  return (dispatch) => {
    (async () => {
      try {
         await PostDataProduct(data)
          .then((res) =>
            res.status !== 201
              ? console.error(res.message)
              : setTimeout(() => {
                  toast.dismiss();
                  toast.success("Create Product success");
                }, 1000)
          )
          .catch((error) => {
            toast.error("Create Product Fail");
          });
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
export const PutProductThunk = (data) => {
  return (dispatch) => {
    (async () => {
      try {
         await PutDataProduct(data)
          .then((res) => {
            if (res.status !== 200) {
              console.error(res.message);
            } else {
              dispatch(reRender());
              GetDataProduct()
                .then((res) => res.status === 200 && res.json())
                .then((res) => {
                  dispatch(SetDataProduct(res));
                })
                .catch((error) => {
                  toast.error(`${error.message}`);
                });

              setTimeout(() => {
                toast.dismiss();
                toast.success("Save Product success");
              }, 1000);
            }
          })
          .catch((error) => {
            toast.error("Create Product Fail");
          });
      } catch (error) {
        console.error(error);
      }
    })();
  };
};

export const GetSlideShow =()=>{
return ( dispatch)=>{
    (async ()=>{
      try {
        const rest = await GetDataSlideShow().then(res=> res.json())
        const teemp= rest.data.reduce((a,b)=>a + `&id=${b}`,"?")
        const data = await GetDataProduct(teemp).then(res=>res.json())
        dispatch(saveSlideShow(data))
      } catch (error) {
        
      }
    })()
}
}
export const PutSlideShow =(data)=>{
  return (dispatch)=>{
      (async ()=>{
        try {
          const temp = data.map((e,i)=>e.id)
            dispatch(saveSlideShow(data))
            await PutDataSlideShow(temp).then(res=>{res.status===200&&toast.success("Change Success!")})
            .catch(error=> {toast.error("Put Data SlideShow Fail!")})
        } catch (error) {
          console.log(error);
        }
      })()
  }
}

