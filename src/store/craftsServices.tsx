import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import Mision from "@/models/misions";
import axios from "axios";
import { forEach } from "cypress/types/lodash";

interface misionState {
  misions: Array<Mision>,
  misionSelected: String | null,
  objectives: Array<string>| null,
}

function getMisions(){
  const misions: { name: any; objectives: any; }[] = [];
  axios.get('http://127.0.0.1:8000/api/mision')
      .then(response => {
        console.log(`response${response}`)
        response.data.forEach((mision: any) => {
            //misions.push({name: mision.name, objectives: mision.objectives.map((objective: any) => {objective.name})});
          });
      } );
  return misions;
  }
// Initial state
const initialState: misionState = 
{
    misions: getMisions(),
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
