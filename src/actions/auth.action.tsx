import {UserModel} from "../shared/models/UserModel";
import axios from "axios";
import qs from 'qs';
import {appConstants} from "../Header/appConstants";
export const login = (user:UserModel, succeed:()=>void, fail:()=>void) => {
   const loginPromise = axios.post<{success: boolean}>(
       `${process.env.REACT_APP_API}/login`,
       qs.stringify(user), // -> convert user to string
       // user
       /*
       when we login, how does back end know ?:
        by auth, cookies, set the cookies
        */
       // carry/ set cookie from backend
       {withCredentials: true}
   )
       .then((res) => {
           // res:{data: {success: boolean, msg:''}, user:null/{}, state:... }}
           res.data.success ? succeed() : fail();
       })
       .catch(()=>{
           fail();
       });

    return{
        type: appConstants.LOGIN,
        payload: loginPromise,
    };

}