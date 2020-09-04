import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state) => {
      state.count = state.count + 1;
    },
    sub: (state) => {
      state.count = state.count - 1;
    },
    addByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { add, sub, addByValue } = counterSlice.actions;
