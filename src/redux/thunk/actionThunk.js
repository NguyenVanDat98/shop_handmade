import toast from "react-hot-toast";
import { GetDataProduct } from "../../api/adminMethodAip";
import { fetProducts, fetSlide, createAccount, createProfileAccount, getAccount, createItemCart, fetProductsAll } from "../../api/apiMethod"
import { fetchAccount, getProduct, getProductAll, getSlider } from "../userReducer/action-reduce";
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
export const fetchDataProductAll = () => {
    return (dispatch) => {
        (async () => {
            try {
                const rest = await fetProductsAll()
                dispatch(getProductAll(rest))
            } catch (error) {
                console.log(error);
            }
        })()
    }
}

export const fetListProduct = (path) => {
    return (dispatch) => {
        (async () => {
            try {
                console.log(path);
                const data = await fetProducts({ page: 1, limit: path.limit, sort: path.sort, filter: path.filter })

                const load = await fetProducts({ ...path, limit: 4, page: path.page + 1 })
                if (load.length === 0) {
                    dispatch(isLoadmore(false));
                } else {
                    dispatch(isLoadmore(true));
                }
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
                data.data.map((e, i) => { text += `&id=${e}` })
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