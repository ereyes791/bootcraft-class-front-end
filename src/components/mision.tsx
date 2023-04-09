import * as React from "react";
import { useEffect, useState } from "react";
import Theme from "@/models/themes";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/themesOptions";

export default function Misions() {
    const [previousValue, setPreviousValue] = useState('');
    const themes = useSelector(selectTheme);
    const reduxValue = useSelector(selectTheme).ThemeSelected;
    const [previousArrayValue, setPreviousArrayValue] = useState(Array<number>);
     useEffect(() => {
        if (reduxValue !== previousValue) {
            console.log(reduxValue,previousValue);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            setPreviousArrayValue(themes.misions);
          // Perform side effect with the new value
        }
      }, [reduxValue, previousValue]);
    const ThemeSelected = useState( useSelector(selectTheme).ThemeSelected);
    const Themes : Array<Theme> = useSelector(selectTheme).theme;
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