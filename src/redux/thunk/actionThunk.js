import toast from "react-hot-toast";
import { GetDataProduct } from "../../api/adminMethodAip";
import { fetProducts, fetSlide, createAccount, createProfileAccount, getAccount, createItemCart } from "../../api/"
import { fetchAccount, getProduct, getSlider, SaveCart } from "../userReducer/action-reduce";
import { isLoadmore, addToCart, SaveCartReview } from './../userReducer/action-reduce';
import { getCartItem } from "../../api/apiMethod";
import { putItemInCart } from './../../api/apiMethod';

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
                dispatch(isLoadmore(load.length === 0 ? false : true));
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
                const text = data.data.reduce((a, b) => a + `&id=${b}`, "?")
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
const ResCheck = (res, mes = "", param = 200) => res.status === param ? res.json() : toast.error(mes)
export const getCart = (data) => {
    return (dispatch) => {
        (async () => {
            try {
                const rest = await getCartItem(data).then(res => ResCheck(res))
                dispatch(addToCart(rest))

            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const putCart = (data) => {
    return (dispatch) => {
        (async () => {
            try {
                const respose = await getCartItem(data.id).then(res => ResCheck(res))
                const check = respose.cart.findIndex(e => e.product_id === data.data.product_id)
                const temp = { ...respose, cart: check === -1 ? [...respose.cart, data.data] : [...respose.cart] }
                // console.log(temp);
                await putItemInCart(data.id, temp).then(res => ResCheck(res, ""))
                // console.log(data);
                dispatch(SaveCartReview(temp))
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const getDataItemReview = () => {
    return (dispatch) => {
        (async () => {
            try {
                const localitems = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : {};
                if (localitems.cart_id) {
                    const data = await getCartItem(localitems.cart_id).then((res) => ResCheck(res, ""))
                        .then((res) => {
                            const datareview = res.cart.map(_ => _.product_id)
                            // console.log(datareview);
                            return datareview
                        })
                    const dataList = await fetProducts({ page: 1, filter: data });
                    // console.log(dataList);
                    dispatch(SaveCartReview(dataList))
                }
            } catch (error) {

            }
        })()
    }
}
export const getDataCartItem = () => {
    return (dispatch) => {
        (
            async () => {
                try {
                    const localitem = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : {};
                    if (localitem.cart_id) {
                        const check = await getCartItem(localitem.cart_id).then((res) => ResCheck(res, ""))
                            .then((res) => {
                                const temp = res.cart.map(_ => _.product_id)
                                return temp.reduce((_, __) => _ + `&id=${__}`, "?")
                            })
                        const dataItem = await fetProducts({ page: 1, filter: check })
                        dispatch(SaveCart(dataItem))
                    }
                } catch (error) {

                }
            }
        )()
    }
}