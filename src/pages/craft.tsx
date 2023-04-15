import { Stack,Autocomplete,TextField } from "@mui/material";
import { props } from "cypress/types/bluebird";
import { type } from "os";
import * as React from "react";
import { useEffect, useState } from "react";
import Mision from "@/models/misions";
import Themes from "../components/misions"
import { useDispatch, useSelector } from "react-redux";
import { selectMision } from "@/store/craftsServices";
import Misions from "@/components/objectives";
import Crafts from "@/components/materials";

export default function Craft() {
      // New State
    const ThemesArray : Array<Mision> = useSelector(selectMision).misions;
    type autoCompleteProps = { options: Array<string>, getOptionLabel: any };
    const misionSelected = useState( useSelector(selectMision).misionSelected);
    const [previousValue, setPreviousValue] = useState('');
    const reduxValue = useSelector(selectMision).misionSelected;
    useEffect(() => {
        if (reduxValue !== previousValue) {
            console.log(reduxValue,previousValue);
            const mision: Array<number> | undefined = ThemesArray.find((option: any) => option.name === reduxValue)?.random;
          // Perform side effect with the new value
        }
      }, [reduxValue, previousValue]);
    console.log('misionSelected',misionSelected);
    function showAutoComplete(){
       return (
            <div className="craft-main__container">
                <Themes/>
                {misionSelected?<Misions/>:null}
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
