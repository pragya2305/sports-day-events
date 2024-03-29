import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_STATUS } from "../../enums";

const initialState = {
  // userName: null,
  userAuthStatus: AUTH_STATUS.UNAUTHORIZED,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setUserName: (state, action) => {
    //   state.userName = action.payload;
    // },
    setUserAuthStatus: (state, action) => {
      state.userAuthStatus = action.payload;
    },
  },
});

const { setUserAuthStatus } = authSlice.actions;

export const useAuthSlice = () => {
  const dispatch = useDispatch();
  // const userName = useSelector((state) => state.auth.userName);
  const userAuthStatus = useSelector((state) => state.auth.userAuthStatus);
  return {
    // userName,
    userAuthStatus,
    // setUserName: (userName) => dispatch(setUserName(userName)),
    setUserAuthStatus: (userAuthStatus) =>
      dispatch(setUserAuthStatus(userAuthStatus)),
  };
};

export default authSlice;
