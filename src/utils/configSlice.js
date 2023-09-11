import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    appLanguage: "en",
  },
  reducers: {
    changeAppLanguage: (state, action) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { changeAppLanguage } = configSlice.actions;
export default configSlice.reducer;
