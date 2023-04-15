import * as React from "react";
import { useState } from "react";
import Mision from "@/models/misions";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectMision,getOption } from "@/store/craftsServices";

export default function Misions() {
    // get the options from the store
    const options : Array<Mision> = useSelector(selectMision).misions;
    const dispatch = useDispatch();
    // set the default props
    const defaultProps = {
        options: options.map((option) => option.name),
        getOptionLabel: (option: string) => option,
        };
        // select the objectives from the selected mision
        //TODO: Change function name and clean the code
    function getRandom(value: string){
            dispatch(getOption(value));
            const randoms = options.find((option) => option.name === value)?.objectives;
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