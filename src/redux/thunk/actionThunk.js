import toast from "react-hot-toast";
import { GetDataProduct } from "../../api/adminMethodAip";
import { fetProducts, fetSlide, createAccount, createProfileAccount, getAccount, createItemCart } from "../../api/"
import { fetchAccount, getProduct,  getSlider } from "../userReducer/action-reduce";
import { isLoadmore } from './../userReducer/action-reduce';

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
                const data = await fetProducts({ page: 1, limit: path.limit, sort: path.sort, filter: path.filter })    
                const load = await fetProducts({ ...path, limit: 4, page: path.page + 1 })
                dispatch(isLoadmore(load.length === 0?false:true ));            
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
                const text=  data.data.reduce((a, b) => a + `&id=${b}` ,"?")
                const response = await GetDataProduct(text).then(res => res.json())
                dispatch(getSlider(response))
            } catch (error) {
                console.log(error);
            }
        })();
    }
}

export const createAccountAsyn = (data) => {
    return (dispatch) => {
        (async () => {
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