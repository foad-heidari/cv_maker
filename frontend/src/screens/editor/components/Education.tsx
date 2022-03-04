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
import { addEducation, deleteEducation, updateEducation } from "../../../redux/actions/educationActions";


export default function Education() {
    const educations = useSelector(
        (state: AppState) => state.educations.educations
    );

    const dispatch = useDispatch();
    const { cvId } = useParams();


    const addNewField = () => {
        const order = educations.length > 0 ? educations[educations.length - 1].order + 1 : 1;

        dispatch(addEducation({
            cv: cvId || "",
            order,
        }));
    };
    const updateEducationHandler = (data: FieldDataType, save: boolean) => {

        dispatch(updateEducation({
            id: data.id,
            cv: cvId || "",
            name: data.name,
            startDate: data.startDate || "",
            endDate: data.endDate || "",
            company: data.company || "",
        }, save
        ));
    };

    return (
        <>
            {educations.map((element: FieldDataType) => <InputItem
                fieldsData={(data, save) => updateEducationHandler(data, save)}
                deleteField={(id: string) => dispatch(deleteEducation(id))}


                key={element.id}
                element={element}
                showCompany={true}
                showDate={true}
                hideLevel={true}
                inputTitle="Education"
            />)}

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
