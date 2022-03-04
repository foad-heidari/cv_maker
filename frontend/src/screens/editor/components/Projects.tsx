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
import { addProject, deleteProject, updateProject } from "../../../redux/actions/prjectsActions";


export default function Projects() {
    const projects = useSelector(
        (state: AppState) => state.projects.projects
    );
    const { cvId } = useParams();

    const dispatch = useDispatch();

    const addNewField = () => {
        const order = projects.length > 0 ? projects[projects.length - 1].order + 1 : 1;

        dispatch(addProject({
            cv: cvId || "",
            order: order,
        }));
    };

    const updateProjectHandler = (data: FieldDataType, save: boolean) => {
        dispatch(updateProject({
            id: data.id,
            cv: cvId || "",
            name: data.name,
            description: data.description || "",
        },
            save
        ));
    };

    return (
        <>
            {projects.map((element: FieldDataType) => <InputItem
                fieldsData={(data, save) => updateProjectHandler(data, save)}
                deleteField={(id: string) => dispatch(deleteProject(id))}

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
