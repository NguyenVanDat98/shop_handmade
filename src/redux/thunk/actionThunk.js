import { getAccount } from "../../api/apiMethod"
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