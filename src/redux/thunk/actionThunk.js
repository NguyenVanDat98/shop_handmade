import toast from "react-hot-toast";
import { GetDataProduct } from "../../api/adminMethodAip";
import { fetProducts, fetSlide, createAccount, createProfileAccount, getAccount, createItemCart } from "../../api/"
import { ClearStepPayment, fetchAccount, getProduct, getProductSearch, getSlider, SaveCart } from "../userReducer/action-reduce";
import { isLoadmore, addToCart, SaveCartReview } from './../userReducer/action-reduce';
import { createItemPayment, fetProductSearch, getCartItem, updateCartItem } from "../../api/apiMethod";
import { putItemInCart } from './../../api/apiMethod';
import store from './../store';

export const checkLogin = () => {
    return (dispatch) => {
        (async () => {
            try {
                const locale = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : null
                if (locale !== null) {
                    const data = await getAccount(`/${locale.id}`).then(res => res.json())
                    dispatch(fetchAccount(data))
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }
}


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
                console.log(path);
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
export const fetListProductSearch = (path) => {
    return (dispatch) => {
        (async () => {
            try {
                const data = await fetProductSearch({ page: 1, limit: path.limit, sort: path.sort, filter: path.filter, search: path.search })
                const load = await fetProductSearch({ ...path, limit: 6, page: path.page + 1 })
                dispatch(isLoadmore(load.length === 0 ? false : true));
                dispatch(getProductSearch(data))
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
                await createItemPayment(data.paymentItem)
                toast.loading("Wating...")
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
const ResCheck = (res, mesSuccess = "", mesError = "", param = 200) => {
    if (res.status === param) {
        toast.dismiss()
        mesSuccess !== "" && toast.success(mesSuccess)
        return res.json()
    }
}
export const getCart = (data) => {
    return (dispatch) => {
        (async () => {
            try {
                const rest = await getCartItem(data).then(res => res.status === 200 && res.json())
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
                await putItemInCart(data.id, temp).then(res => ResCheck(res, "Success"))
                dispatch(addToCart(data.data))

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
                    const data = await getCartItem(localitems.cart_id).then(res => res.status === 200 && res.json())
                        .then((res) => {
                            const datareview = res.cart.map(_ => _.product_id)
                            return datareview
                        })
                    const dataList = await fetProducts({ page: 1, filter: data });
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
                        await getCartItem(localitem.cart_id).then((res) => res.status === 200 && res.json())
                            .then((res) => {
                                dispatch(SaveCart(res))
                            })
                    }
                } catch (error) {

                }
            }
        )()
    }
}

export const deleteItemInCart = (id) => {
    return (dispatch) => {
        (async () => {
            try {

                const locale = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : null
                const temp = store.getState().users.cart.cart.filter(_ => id !== _.product_id)
                const response = { id: locale.cart_id, cart: temp }

                await updateCartItem(locale.cart_id, response).then(res => {
                    if (res.status === 200) {
                        toast.dismiss();
                        toast.success("Clear Item cart success!");
                        dispatch(SaveCart(response))
                    }
                }).catch(error => {
                    toast.dismiss();
                    toast.error(error.message);

                })
            } catch (error) {
                console.log(error);
            }
        })()
    }
}

/// ----clear all Cart --------
export const clearCartUser = (item) => {
    return (dispatch) => {
        (async () => {
            try {
                await updateCartItem(item.id, item).then(res => {
                    if (res.status === 200) {
                        toast.dismiss();
                        toast.success("Clear cart success!");
                        dispatch(SaveCart(item))
                    }
                }).catch(error => {
                    toast.dismiss();
                    toast.error(error.message);

                })
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
