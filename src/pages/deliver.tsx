import { Stack,Autocomplete,TextField } from "@mui/material";
import { props } from "cypress/types/bluebird";
import { type } from "os";
import * as React from "react";
import { useState } from "react";
import Theme from "@/models/themes";
import Themes from "../components/theme"
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "@/store/themesOptions";

export default function Deliver() {
    const options : Array<Theme> = Array.from(Array(6), (_, i) => ({ name: `Option ${i + 1}`, random: Array.from(Array(3), () => Math.round(Math.random() * 100)) }));
    const defaultProps = {
        options: options.map((option) => option.name),
        getOptionLabel: (option: string) => option,
        };
      // New State
    type userRandom = Array<number>
    type autoCompleteProps = { options: Array<string>, getOptionLabel: any };
    const [Autocompletes, setAutocompletes] = useState<autoCompleteProps[]>([defaultProps])
    const authState = useSelector(selectTheme);
    console.log(authState);
    function getRandom(value: string){
        let random: userRandom | undefined ;
        random  = options.find((option) => option.name === value)?.random;
        console.log(random);
        if(random){
            const adding = {
                options: random,
                getOptionLabel: (option: string) => option.toString(),
            }
            setAutocompletes([...Autocompletes,adding]);
            console.log(Autocompletes);

        }
    }
    function showAutoComplete(){
       return (<Themes/>);
    }
    return (
    <>
        <h1>ENTREGAS</h1>
      <Stack spacing={1} sx={{ width: 400 }}>
        {showAutoComplete()}
      </Stack>
    </>
    );
}
