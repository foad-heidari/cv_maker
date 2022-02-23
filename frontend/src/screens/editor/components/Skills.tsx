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
import { addSkill, updateSkill } from "../../../redux/actions/skillActions";


export default function Skills() {
    const skills = useSelector(
        (state: AppState) => state.skills.skills
    );

    const dispatch = useDispatch();

    const addNewField = () => {
        dispatch(addSkill({
            id: "3",
            name: "",
            level: "0",
        }));
    };
    const updateSkillHandler = (data: FieldDataType) => {
        dispatch(updateSkill({
            id: data.id,
            name: data.name,
            level: data.level || "0",
        }
        ));
    };

    return (
        <>
            {skills.map((element: FieldDataType) => <InputItem
                fieldsData={(data) => updateSkillHandler(data)}
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
