import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "c45a857c193f6302f2b5061c3b85e743",
};

const apiKeySlice = createSlice({
  name: "apiKey",
  initialState,
  reducers: {
    setApiKey: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setApiKey } = apiKeySlice.actions;
export default apiKeySlice.reducer;
