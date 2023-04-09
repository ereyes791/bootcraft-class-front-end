import * as React from "react";
import { useState } from "react";
import Theme from "@/models/themes";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme,getOption } from "@/store/themesOptions";

export default function Themes() {
    const options : Array<Theme> = useSelector(selectTheme).theme;
    const dispatch = useDispatch();
    const defaultProps = {
        options: options.map((option) => option.name),
        getOptionLabel: (option: string) => option,
        };
    function getRandom(value: string){
            dispatch(getOption(value));
            const randoms = options.find((option) => option.name === value)?.random;
            console.log(randoms);
        }
    return (
        <>
        <Autocomplete
        {...defaultProps}
        id="auto-complete"
        onChange={( event,value) => getRandom(value as string)} 
        autoComplete
        includeInputInList
        renderInput={(params) => (
            <TextField {...params} label="autoComplete" variant="standard" />
        )}
        />
        </>
        );
}