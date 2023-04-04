import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import Theme from "@/models/themes";

// Initial state
const initialState: Array<Theme> = Array.from(
    Array(6), (_, i) => ({ 
        name: `Option ${i + 1}`, 
        random: Array.from(
            Array(3), 
            () => Math.round(Math.random() * 100)) 
    })
);


// Actual Slice
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Action to set the authentication status
    getOption(state, action) {
        console.log(state);
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.theme,
      };
    },
  },
});

export const { getOption } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme;

export default themeSlice.reducer;