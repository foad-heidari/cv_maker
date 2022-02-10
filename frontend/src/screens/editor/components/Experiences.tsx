import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../types/EditorTypes";


export default function Projects() {
    const [inputs, setInputs] = React.useState<FieldDataType[]>([{ id: 1, description: "", value: "PESCheck" }]);

    const addNewField = () => {
        const newField: FieldDataType = { id: 2, level: "", value: "" };
        setInputs(prevArray => [...prevArray, newField]);
    };

    return (
        <>
            {inputs.map((element: FieldDataType) => <InputItem key={element.id} element={element} showlocation={true} showItemName={true} showDate={true} showDescription={true} hideLevel={true} inputTitle="Role" />)}

            <Divider sx={{ my: 2 }} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={addNewField} variant="outlined" startIcon={<AddCircleIcon />}>
                    Experience
                </Button>
            </Grid>
        </>
    );
}