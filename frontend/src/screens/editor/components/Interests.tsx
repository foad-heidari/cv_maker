import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import PianoIcon from "@mui/icons-material/Piano";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../utils/Types";
import { AppState } from "../../../redux/Store";
import { addInterest, deleteInterest, updateInterest } from "../../../redux/actions/cv_actions/interestActions";


export default function Interests() {
    const interests = useSelector(
        (state: AppState) => state.interests.interests
    );
    const dispatch = useDispatch();
    const { cvId } = useParams();

    const updateInterestHandler = (data: FieldDataType, save: boolean) => {
        dispatch(updateInterest({
            id: data.id,
            cv: cvId || "",
            name: data.name,
        }, save
        ));
    };

    const addNewField = () => {
        const order = interests.length > 0 ? interests[interests.length - 1].order + 1 : 1;
        dispatch(addInterest({
            order,
            cv: cvId || "",
        }));
    };

    return (
        <>
            {interests.map((element: FieldDataType) => <InputItem
                fieldsData={(data, save) => updateInterestHandler(data, save)}
                deleteField={(id: string) => dispatch(deleteInterest(id))}
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
