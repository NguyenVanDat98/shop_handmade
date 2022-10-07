import toast from "react-hot-toast";
import { fetProducts, fetSlide,createAccount, createProfileAccount, getAccount } from "../../api/apiMethod"
import { fetchAccount, getProduct, getSlider } from "../userReducer/action-reduce";

export const fetDataAsyn = (path = "") => {

    return (dispatch) => {
        (async () => {
            try {
                const data = await getAccount(path)
                dispatch(fetchAccount(data))
            } catch (error) {

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

            }
        })();

    }
}
export const getSlide = () => {
    return (dispatch) => {
        (async () => {
            try {
                const data = await fetSlide();
                dispatch(getSlider(data))
            } catch (error) {

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
               toast.loading("Wating...")
             
            } catch (error) {
                
            }
        })()
    }
}