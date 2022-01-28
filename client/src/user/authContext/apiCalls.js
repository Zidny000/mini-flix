import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (isAdmin,user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", user);
    if(isAdmin){
      if(res.data.isAdmin){
        dispatch(loginSuccess(res.data));
      }else{
        dispatch(loginFailure());
      }
    }else{
      if(res.data.isAdmin){
        dispatch(loginFailure());
      }else{
        dispatch(loginSuccess(res.data));
      }
    }
    
  } catch (err) {
    dispatch(loginFailure());
  }
};
