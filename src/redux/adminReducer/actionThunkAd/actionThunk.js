import toast from "react-hot-toast";
import {
  API_URL,
  GetDataProduct,
  GetDataSlideShow,
  PostDataProduct,
  PutDataProduct,
  PutDataSlideShow,
} from "../../../api/adminMethodAip";
import {
  GetAccoutAll,
  GetAllProfileUser,
  GetListPayment,
  GetOrder,
} from "../../../api/adminMethodAip/apiMethodAccount";
import {
  historyOrder,
  listRating,
  reRender,
  saveListUser,
  saveSlideShow,
  SetDataProduct,
} from "../adminAction";

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

export const GetSlideShow = () => {
  return (dispatch) => {
    (async () => {
      try {
        const rest = await GetDataSlideShow().then((res) => res.json());
        const teemp = rest.data.reduce((a, b) => a + `&id=${b}`, "?");
        const data = await GetDataProduct(teemp).then((res) => res.json());
        dispatch(saveSlideShow(data));
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
export const PutSlideShow = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        const temp = data.map((e, i) => e.id);
        dispatch(saveSlideShow(data));
        await PutDataSlideShow(temp)
          .then((res) => {
            res.status === 200 && toast.dismiss();
            res.status === 200 && toast.success("Change Success!");
          })
          .catch((error) => {
            toast.error("Put Data SlideShow Fail!");
          });
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

const checkRespose = (param, message) => {
  return param.status === 200 ? param.json() : toast.error(message);
};

export const GetInfomationUser = (param) => {
  return (dispatch) => {
    (async () => {
      try {
        const rest = await GetAccoutAll().then((res) =>
          checkRespose(res, "Call AIP fail!")
        );
        const respose = await GetListPayment(param).then((res) =>
          checkRespose(res, "Call List Payment Fail!")
        );
        const profile = await GetAllProfileUser(param).then((res) =>
          checkRespose(res, "Call List Profile Fail!")
        );
        dispatch(
          saveListUser({ acc: rest, payment: respose, profile: profile })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const GetRatingsTotal = () => {
  return (dispatch) => {
    (async () => {
      try {
        const payment = await GetListPayment(
          "?_page=1&_limit=5&_sort=total&_order=desc"
        ).then((res) => checkRespose(res, "Top Fail!"));

        const txt = payment.reduce((a, b) => a + `&id=${b.profile_id}`, "?");
        const profile = await GetAllProfileUser(txt).then((res) =>
          checkRespose(res, "Profile Ratings Fail!")
        );
        dispatch(listRating({ profile: profile, payment: payment }));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const GetListOrder = (param = [] || "") => {
  return (dispatch) => {
    (async () => {
      try {
        const txt = Array.isArray(param)
          ? param.reduce((a, b) => a + `&id=${b}`, "?")
          : "";
        await GetOrder(txt)
          .then((res) => checkRespose(res, "Fet List Oder Fail!"))
          .then((res) => {
            dispatch(historyOrder(res));
          });
        // console.log(rest);
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
