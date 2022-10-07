import toast from "react-hot-toast";
import { createAccount, createProfileAccount, getAccount } from "../../api/apiMethod"
import { fetchAccount } from "../userReducer/action-reduce";



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
export const createAccountAsyn =(data)=>{
    return()=>{
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