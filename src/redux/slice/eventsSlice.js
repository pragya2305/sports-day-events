import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = { modal: null, toast: null, allEventsPageNo: 1 };

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    setAllEventsPageNo: (state, action) => {
      state.allEventsPageNo = action.payload;
    },
  },
});

const { setModal, setToast, setAllEventsPageNo } = eventsSlice.actions;

export const useEventsSlice = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.events.modal);
  const toast = useSelector((state) => state.events.toast);
  const allEventsPageNo = useSelector((state) => state.events.allEventsPageNo);
  return {
    modal,
    toast,
    allEventsPageNo,
    setModal: (modal) => dispatch(setModal(modal)),
    setToast: (toast) => dispatch(setToast(toast)),
    setAllEventsPageNo: (allEventsPageNo) =>
      dispatch(setAllEventsPageNo(allEventsPageNo)),
    increasePageNo: () => dispatch(setAllEventsPageNo(allEventsPageNo + 1)),
  };
};

export default eventsSlice;
