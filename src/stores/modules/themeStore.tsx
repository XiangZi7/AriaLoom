import { createSlice } from "@reduxjs/toolkit";

const themeStore = createSlice({
  name: "theme",
  // 初始化 state
  initialState: {
    isDark: "isLight",
  },
  // 修改状态的方法 同步方法，可以直接修改值
  reducers: {
    setDark(state, idx) {
      state.isDark = idx.payload;
    },
  },
});

// 解构出来 actionCreater函数
const { setDark } = themeStore.actions;
// 获取 reducer
// 用于定义如何更新应用的状态。它接收两个参数：当前的状态（state）和即将执行的 action，并返回一个新的状态。
const reducer = themeStore.reducer;

// 按需导出
export { setDark };
// 默认导出
export default reducer;
