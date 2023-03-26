import { Stack,Autocomplete,TextField } from "@mui/material";
import { props } from "cypress/types/bluebird";
import { type } from "os";
import * as React from "react";
import { useState } from "react";

export default function Deliver() {
    const options = Array.from(Array(6), (_, i) => ({ name: `Option ${i + 1}`, random: Array.from(Array(3), () => Math.round(Math.random() * 100)) }));
    type UserData = {
        name: string,
        random: Array<number>
      }
      // New State
    type UserArray = Array<UserData>
    type userRandom = Array<number>
    type autoCompleteProps = { options: Array<string>, getOptionLabel: any };
    type autoCompleteArray = Array<autoCompleteProps>
    const [Autocompletes, setAutocompletes] = useState<autoCompleteArray>([])
    const [users, setUsers] = useState<UserArray>(options)
    const [user , setUser] = useState<userRandom | null>(null)
    const [secondOption , setOption] = useState<userRandom | null>(null) 
    const defaultProps = {
      options: options.map((option) => option.name),
      getOptionLabel: (option: string) => option,
    };
    Autocompletes.push(defaultProps);
    function getRandom(value: string){
        let random: userRandom | undefined ;
        random  = options.find((option) => option.name === value)?.random;
        Autocompletes.push({
            options: random,
            getOptionLabel: (option: string) => option,
        });
        setAutocompletes(Autocompletes);
        console.log(Autocompletes);
    }
    function showAutoComplete(){
      const show = Autocompletes.map((auto,i) => {
       return <Autocomplete
        key={i}
        {...auto}
        id="auto-complete"
        onChange={( event,value) => getRandom(value as string)} 
        autoComplete
        includeInputInList
        renderInput={(params) => (
            <TextField {...params} label="autoComplete" variant="standard" />
        )}
        />
      }
      );
        return show;
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
