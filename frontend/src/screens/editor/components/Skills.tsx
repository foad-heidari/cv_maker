import InputItem from "./InputItem";
import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FieldDataType } from "../../../types/EditorTypes";


export default function Skills() {
    const [inputs, setInputs] = React.useState<FieldDataType[]>([{ id: 1, level: "60%", value: "Python" }]);

    const addNewField = () => {
        const newField: FieldDataType = { id: 2, level: "", value: "" };
        setInputs(prevArray => [...prevArray, newField]);
    };

    return (
        <>
            {inputs.map((element: FieldDataType) => <InputItem key={element.id} element={element} inputTitle="skill" />)}


            <Divider sx={{ my: 2 }} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={addNewField} variant="outlined" startIcon={<AddCircleIcon />}>
                    Skill
                </Button>
            </Grid>
        </>
    );
}
