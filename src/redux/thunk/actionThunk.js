import toast from "react-hot-toast";
import { GetDataProduct } from "../../api/adminMethodAip";
import { fetProducts, fetSlide,createAccount, createProfileAccount, getAccount, createItemCart } from "../../api/apiMethod"
import { fetchAccount, getProduct, getSlider } from "../userReducer/action-reduce";

export const fetDataAsyn = (path = "") => {

    return (dispatch) => {
        (async () => {
            try {
                const data = await getAccount(path)
                dispatch(fetchAccount(data))
            } catch (error) {
              console.log(error);  
            }
        })();

    }
}
export const fetListProduct = (path) => {
    return (dispatch) => {
        (async () => {
            try {
                const data = await fetProducts({ limit: path.limit, sort: path.sort, filter: path.filter })
                dispatch(getProduct(data))
            } catch (error) {
                console.log(error); 
            }
        })();
    }
}
export const getSlide = () => {
    return (dispatch) => {
        (async () => {
            try {
                const data = await fetSlide();
                let text = "?";
                data.data.map((e,i)=>{text+=`&id=${e}`})
                const response = await GetDataProduct(text).then(res=>res.json())
                console.log(response);
                 dispatch(getSlider(response))
            } catch (error) {
                console.log(error);  
            }
        })();
    }
}

export const createAccountAsyn =(data)=>{
    return(dispatch)=>{
        (async()=>{
            try {
               await createAccount(data.account)
               await createProfileAccount(data.profile)
               await createItemCart(data.cartItem)
               toast.loading("Wating...")
             
            } catch (error) {
              console.log(error);                  
            }
        })()
    }
}