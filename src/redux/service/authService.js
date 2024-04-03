import { useNavigate } from "react-router-dom";
import { useAuthSlice } from "@redux/slice";
import { URL, AUTH_STATUS } from "@constants";
import { useLoginMutation, useLogoutMutation } from "../api/auth/api";
import { useState } from "react";

export const useLoginService = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUserAuthStatus, setUserId } = useAuthSlice();
  const [login, { isLoading }] = useLoginMutation();
  const doLogin = async (username, password) => {
    try {
      const payload = { id: username, password };
      await login(payload).unwrap();
      setUserId(username);
      navigate(URL.DASHBOARD);
      setUserAuthStatus(AUTH_STATUS.AUTHORIZED);
    } catch (err) {
      setError("Username or password is incorrect");
    }
  };
  return { doLogin, loading: isLoading, error };
};

export const useLogoutService = () => {
  const navigate = useNavigate();
  const { setUserAuthStatus, userId } = useAuthSlice();
  const [logout, { isLoading }] = useLogoutMutation();
  const logoutUser = async () => {
    await logout({ id: userId }).unwrap();
    setUserAuthStatus(AUTH_STATUS.UNAUTHORIZED);
    navigate(URL.LOGIN);
  };
  return { logoutUser, isLoading };
};
