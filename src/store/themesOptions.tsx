import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import Theme from "@/models/themes";

interface ThemeState {
  theme: Array<Theme>,
  ThemeSelected: String | null,
  misions: Array<number>| null,
}

// Initial state
const initialState: ThemeState = 
{
    theme: Array.from(
        Array(6), (_, i) => ({ 
          name: `Option ${i + 1}`, 
          random: Array.from(
              Array(3), 
              () => Math.round(Math.random() * 100)) 
      })
    ),
    ThemeSelected: null,
    misions: null,
  }


// Actual Slice
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Action to set the authentication status
    getOption(state, action) {
      state.ThemeSelected = action.payload;
      state.misions = state.theme.find((option: any) => option.name === action.payload)?.random;
    },
  },
});

export const { getOption } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme;

export default themeSlice.reducer;