import { Stack,Autocomplete,TextField } from "@mui/material";
import { props } from "cypress/types/bluebird";
import { type } from "os";
import * as React from "react";
import { useEffect, useState } from "react";
import Theme from "@/models/themes";
import Themes from "../components/theme"
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "@/store/themesOptions";
import Misions from "@/components/mision";
import Crafts from "@/components/crafts";

export default function Deliver() {
    const options : Array<Theme> = Array.from(Array(6), (_, i) => ({ name: `Mision ${i + 1}`, random: Array.from(Array(3), () => Math.round(Math.random() * 100)) }));
    const defaultProps = {
        options: options.map((option) => option.name),
        getOptionLabel: (option: string) => option,
        };
      // New State
    type userRandom = Array<number>
    const ThemesArray : Array<Theme> = useSelector(selectTheme).theme;
    type autoCompleteProps = { options: Array<string>, getOptionLabel: any };
    const themeState = useSelector(selectTheme);
    const ThemeSelected = useState( useSelector(selectTheme).ThemeSelected);
    const [previousValue, setPreviousValue] = useState('');
    const [misions, setMisions] = useState(Array<number>);
    const reduxValue = useSelector(selectTheme).ThemeSelected;
    useEffect(() => {
        if (reduxValue !== previousValue) {
            console.log(reduxValue,previousValue);
            const mision: Array<number> | undefined = ThemesArray.find((option: any) => option.name === reduxValue)?.random;
            setMisions(mision);
            setPreviousValue(reduxValue);
          // Perform side effect with the new value
        }
      }, [reduxValue, previousValue]);
    console.log('ThemeSelected',ThemeSelected);
    function showAutoComplete(){
       return (
            <div className=".craft-main__container">
                <Themes/>
                <Misions/>
                <Crafts/>
            </div>
       );
    }
    return (
    <>
        <h1>ENTREGAS</h1>
      <section className="craft-main">
        {showAutoComplete()}
      </section>
    </>
    );
}
