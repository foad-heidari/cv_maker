import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../types/EditorTypes";


export default function Education() {
    const [inputs, setInputs] = React.useState<FieldDataType[]>([{ id: 1, description: "", name: "Accounting" }]);

    const addNewField = () => {
        const newField: FieldDataType = { id: 2, level: "", name: "" };
        setInputs(prevArray => [...prevArray, newField]);
    };

    return (
        <>
            {inputs.map((element: FieldDataType) => <InputItem
                fieldsData={(data) => { console.log(data); }}

                key={element.id}
                element={element}
                showCompany={true}
                showDate={true}
                showDescription={true} hideLevel={true} inputTitle="Education" />)}

            <Divider sx={{ my: 2 }} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={addNewField} variant="outlined" startIcon={<AddCircleIcon />}>
                    Education
                </Button>
            </Grid>
        </>
    );
}
