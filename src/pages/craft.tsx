import { Stack,Autocomplete,TextField,Card, CardContent } from "@mui/material";
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
import axios from "axios";

export default function Craft() {
      // New State
    const ThemesArray : Array<Mision> = useSelector(selectMision).misions;
    type autoCompleteProps = { options: Array<string>, getOptionLabel: any };
    const misionSelected = useState( useSelector(selectMision).misionSelected);
    const [previousValue, setPreviousValue] = useState('');
    const reduxValue = useSelector(selectMision).misionSelected;
    axios.get('http://127.0.0.1:8000/api/mision')
      .then(response => {
        console.log(response);
      } );

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
            <CardContent className="craft-main__container">
                <Themes/>
                {misionSelected?<Misions/>:null}
                <Crafts/>
            </CardContent>
       );
    }
    return (
    <>
        <h1>ENTREGAS</h1>
        <Card className="craft-main">

        {showAutoComplete()}
      </Card>
    </>
    );
}


