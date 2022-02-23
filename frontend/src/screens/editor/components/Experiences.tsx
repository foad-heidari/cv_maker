import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../utils/Types";
import { AppState } from "../../../redux/Store";
import { addExperience, updateExperience } from "../../../redux/actions/experienceActions";


export default function Projects() {
    const experiences = useSelector(
        (state: AppState) => state.experiences.experiences
    );

    const dispatch = useDispatch();

    const addNewField = () => {
        dispatch(addExperience({
            id: "2",
            name: "",
            startDate: "",
            endDate: "",
            company: "",
            location: "",
            description: "",
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
