import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../types/EditorTypes";
import { AppState } from "../../../redux/Store";
import { addProject, updateProject } from "../../../redux/actions/prjectsActions";


export default function Projects() {
    const projects = useSelector(
        (state: AppState) => state.projects.projects
    );

    const dispatch = useDispatch();

    const addNewField = () => {
        dispatch(addProject({
            id: 3,
            name: "",
            description: "",
        }));
    };
    const updateProjectHandler = (data: FieldDataType) => {
        dispatch(updateProject({
            id: data.id,
            name: data.name,
            description: data.description || "",
        }
        ));
    };

    return (
        <>
            {projects.map((element: FieldDataType) => <InputItem
                fieldsData={(data) => updateProjectHandler(data)}
                key={element.id}
                element={element}
                showDescription={true}
                hideLevel={true}
                inputTitle="Project" />)}
            <Divider sx={{ my: 2 }} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={addNewField} variant="outlined" startIcon={<AddCircleIcon />}>
                    Project
                </Button>
            </Grid>
        </>
    );
}
