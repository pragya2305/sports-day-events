import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import baseApi from "../api/baseApi";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authSlice, eventsSlice } from "../slice";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "@components";

const persistAuthConfig = {
  key: authSlice.name,
  storage,
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [eventsSlice.name]: eventsSlice.reducer,
  [authSlice.name]: persistReducer(persistAuthConfig, authSlice.reducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistStore(store)}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
