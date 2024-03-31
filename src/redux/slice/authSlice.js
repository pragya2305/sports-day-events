import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_STATUS } from "@constants";

const initialState = {
  userId: null,
  userAuthStatus: AUTH_STATUS.UNAUTHORIZED,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserAuthStatus: (state, action) => {
      state.userAuthStatus = action.payload;
    },
  },
});

const { setUserAuthStatus, setUserId } = authSlice.actions;

export const useAuthSlice = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const userAuthStatus = useSelector((state) => state.auth.userAuthStatus);
  return {
    userId,
    userAuthStatus,
    setUserId: (userId) => dispatch(setUserId(userId)),
    setUserAuthStatus: (userAuthStatus) =>
      dispatch(setUserAuthStatus(userAuthStatus)),
  };
};

export default authSlice;
