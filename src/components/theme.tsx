import * as React from "react";
import { useState } from "react";
import Theme from "@/models/themes";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Themes() {
    const options : Array<Theme> = Array.from(Array(6), (_, i) => ({ name: `Mision ${i + 1}`, random: Array.from(Array(3), () => Math.round(Math.random() * 100)) }));
    const defaultProps = {
        options: options.map((option) => option.name),
        getOptionLabel: (option: string) => option,
        };
    function getRandom(value: string){
            console.log(value);
        }
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