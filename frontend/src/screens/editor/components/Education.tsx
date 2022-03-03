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
import { addEducation, updateEducation } from "../../../redux/actions/educationActions";


export default function Education() {
    const educations = useSelector(
        (state: AppState) => state.educations.educations
    );

    const dispatch = useDispatch();

    const addNewField = () => {
        dispatch(addEducation({
            id: "2",
            name: "",
            startDate: "",
            endDate: "",
            company: "",
        }));
    };
    const updateEducationHandler = (data: FieldDataType) => {
        dispatch(updateEducation({
            id: data.id,
            name: data.name,
            startDate: data.startDate || "",
            endDate: data.endDate || "",
            company: data.company || "",
        }
        ));
    };

    return (
        <>
            {educations.map((element: FieldDataType) => <InputItem
                fieldsData={(data) => updateEducationHandler(data)}
                deleteField={(id: string) => { console.log(id); }}

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
