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
import { addSkill, deleteSkill, updateSkill } from "../../../redux/actions/skillActions";


export default function Skills() {
    const skills = useSelector(
        (state: AppState) => state.skills.skills
    );

    const { cvId } = useParams();

    const dispatch = useDispatch();

    const addNewField = () => {
        const order = skills.length > 0 ? skills[skills.length - 1].order + 1 : 1;
        dispatch(addSkill({
            cv: cvId || "",
            order,
        }));
    };
    const updateSkillHandler = (data: FieldDataType, save: boolean) => {
        dispatch(updateSkill({
            id: data.id,
            cv: cvId || "",
            name: data.name,
            level: data.level || "0",
        }, save
        ));
    };

    return (
        <>
            {skills.map((element: FieldDataType) => <InputItem
                fieldsData={(data, save) => updateSkillHandler(data, save)}
                deleteField={(id: string) => dispatch(deleteSkill(id))}
                key={element.id} element={element} inputTitle="skill" />)}
            <Divider sx={{ my: 2 }} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={addNewField} variant="outlined" startIcon={<AddCircleIcon />}>
                    Skill
                </Button>
            </Grid>
        </>
    );
}
