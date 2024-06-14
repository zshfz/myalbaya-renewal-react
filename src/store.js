import { configureStore, createSlice } from "@reduxjs/toolkit";

const isToggled = createSlice({
  name: "isToggled",
  initialState: false,
  reducers: {
    setIsToggled(state) {
      return !state;
    },
  },
});

export const { setIsToggled } = isToggled.actions;

export default configureStore({
  reducer: {
    isToggled: isToggled.reducer,
  },
});
