import * as React from "react";
import { useState } from "react";
import Theme from "@/models/themes";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "@/store/themesOptions";

export default function Themes() {
    const options : Array<Theme> = useSelector(selectTheme);
    const defaultProps = {
        options: options.map((option) => option.name),
        getOptionLabel: (option: string) => option,
        };
    function getRandom(value: string){
            console.log(value);
        }
        const themeState = useSelector(selectTheme);
        console.log(themeState);
        const dispatch = useDispatch();
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