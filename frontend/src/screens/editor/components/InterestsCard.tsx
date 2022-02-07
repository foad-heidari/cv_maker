
import {
    Button,
    Divider,
    Grid,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputItem from './InputItem';
import React from 'react';
import { FieldDataType } from '../../../types/EditorTypes';
import PianoIcon from '@mui/icons-material/Piano';


export default function InterestsCard() {
    const [inputs, setInputs] = React.useState<FieldDataType[]>([{ id: 1, value: "guitar" }]);

    const addNewField = () => {
        const newField: FieldDataType = { id: 2, level: "", value: "" }
        setInputs(prevArray => [...prevArray, newField])
    }
    return (
        <>
            {inputs.map((element: FieldDataType) => <InputItem key={element.id} element={element} Icon={<PianoIcon sx={{ mr: 1 }} />} inputTitle="interest" hideLevel={true} />)}


            <Divider sx={{ my: 2 }} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={addNewField} variant="outlined" startIcon={<AddCircleIcon />}>
                    interest
                </Button>
            </Grid>
        </>
    );
}
