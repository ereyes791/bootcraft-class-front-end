import * as React from "react";
import { useEffect, useState } from "react";
import Theme from "@/models/misions";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectMision } from "@/store/craftsServices";

export default function Objectives() {
    const [previousValue, setPreviousValue] = useState('');
    const mision = useSelector(selectMision);
    const reduxValue = useSelector(selectMision).misionSelected;
    const [previousArrayValue, setPreviousArrayValue] = useState(Array<string>);
     useEffect(() => {
        if (reduxValue !== previousValue) {
            console.log(reduxValue,previousValue);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            setPreviousArrayValue(mision.objectives);
          // Perform side effect with the new value
        }
      }, [reduxValue, previousValue]);
    const defaultProps = {
        options: previousArrayValue,
        getOptionLabel: (option: string) => option,
        };
    function getRandom(value: string){
            console.log(value);
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