import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import PianoIcon from "@mui/icons-material/Piano";

import { useDispatch, useSelector } from "react-redux";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../types/EditorTypes";
import { AppState } from "../../../redux/Store";
import { addInterest, updateInterest } from "../../../redux/actions/interestActions";


export default function Interests() {
    const interests = useSelector(
        (state: AppState) => state.interests.interests
    );

    const dispatch = useDispatch();

    const updateInterestHandler = (data: FieldDataType) => {
        dispatch(updateInterest({
            id: data.id,
            name: data.name,
        }));
    };


    const addNewField = () => {
        dispatch(addInterest({
            id: 4,
            name: "",
        }));
    };
    return (
        <>
            {interests.map((element: FieldDataType) => <InputItem
                fieldsData={(data) => updateInterestHandler(data)}
                key={element.id}
                element={element}
                Icon={<PianoIcon sx={{ mr: 1 }} />}
                inputTitle="interest"
                hideLevel={true}
            />)}
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
