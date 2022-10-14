import React ,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModuleUserProfile,ItemUser } from "./../index.js";
import { GetInfomationUser } from "../../redux/adminReducer/actionThunkAd/actionThunk.js";
import { ChartFiveUser } from ".."
const ListUser = (props) => {
  const [close, setClose] = useState(true);
  const [displayModule, setDisplay] = useState("");
  const [accFocus , setAccFocus ]=useState({});
  const listUserData = useSelector((state) => state.adminData.infomationUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetInfomationUser());
  }, [dispatch]);
  const handleClose =()=>{
      setDisplay("moduleIN");
      setClose(false);
  }
  return (
    <div className="content-listuser  ">
      <div className="listUser">
        <div className="listUser-header">
          <h3>List User</h3>
        </div>
        <div className="body-listUser">
          {listUserData.profile &&
            listUserData.acc.map((e, i) => (
              <ItemUser
                key={i}
                onClick={(item) => {
                  setAccFocus(item)
                  setDisplay("moduleIN");
                  setClose(false);
                }}
                No={i + 1}
                data={{
                  acc: e,
                  profile: listUserData.profile[i],
                  payment: listUserData.payment[i],
                }}
              />
            ))}
        </div>
      </div>
      <div className="empty"></div>
      <ChartFiveUser
        close={close}
        handleClose={handleClose}
      />
      {!close && (
        <ModuleUserProfile
          displayModule={displayModule}
          data={accFocus}
          onClick={() => {
            setDisplay("moduleOUT");
            setTimeout(() => {
              setClose(true);
            }, 100);
          }}
        />
      )}
    </div>
  );
};

export default ListUser;
