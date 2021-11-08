import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "apis/cryptoAPI";
import { newsApi } from "apis/newsAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
});
