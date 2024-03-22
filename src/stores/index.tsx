// 出口文件
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 默认使用localStorage

import themeStore from "./modules/themeStore.tsx";

// 配置持久化
const persistConfig = {
  key: "root",
  storage,
};

// 模块化
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    themeStore,
  })
);

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});

const persistor = persistStore(store);

// 导出
export { store, persistor };
// 导出
export default store;
