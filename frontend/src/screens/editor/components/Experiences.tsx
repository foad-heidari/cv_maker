import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../utils/Types";
import { AppState } from "../../../redux/Store";
import { addExperience, updateExperience } from "../../../redux/actions/experienceActions";


export default function Projects() {
    const experiences = useSelector(
        (state: AppState) => state.experiences.experiences
    );
    const { cvId } = useParams();


    const dispatch = useDispatch();

    const addNewField = () => {
        const order = experiences.length > 0 ? experiences[experiences.length - 1].order + 1 : 1;
        dispatch(addExperience({
            cv: cvId || "",
            order: order
        }));
    };
    const updateExperienceHandler = (data: FieldDataType) => {
        dispatch(updateExperience({
            id: data.id,
            name: data.name,
            startDate: data.startDate || "",
            endDate: data.endDate || "",
            company: data.company || "",
            location: data.location || "",
            description: data.description || "",
        }
        ));
    };


    return (
        <>
            {experiences.map((element: FieldDataType) => <InputItem
                fieldsData={(data) => updateExperienceHandler(data)}
                key={element.id}
                element={element}
                showlocation={true}
                showCompany={true}
                showDate={true}
                showDescription={true}
                hideLevel={true}
                inputTitle="Role"
            />)}

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
