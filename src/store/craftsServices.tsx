import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import Mision from "@/models/misions";

interface misionState {
  misions: Array<Mision>,
  misionSelected: String | null,
  objectives: Array<string>| null,
}

const data = [
  {
    name: "Ciudad Medieval",
    objectives : ["Iglesia", "Castillo", "Mercado"],
  },
  {
    name: "Terra",
    objectives : ["Granja sustentable", "Constructor de casa", "Planta de energía"],
  },
  {
    name: "Cosmos",
    objectives : ["Artemis 1", "Reparar paneles solares", "Base lunar"],
  },

]
// Initial state
const initialState: misionState = 
{
    misions: data,
    misionSelected: null,
    objectives: null,
}


// Actual Slice
export const themeSlice = createSlice({
  name: "mision",
  initialState,
  reducers: {
    // Action to set the authentication status
    getOption(state, action) {
      state.misionSelected = action.payload;
      state.objectives = state.misions.find((option: any) => option.name === action.payload)?.objectives;
    },
  },
});

export const { getOption } = themeSlice.actions;

export const selectMision = (state: AppState) => state.mision;

export default themeSlice.reducer;