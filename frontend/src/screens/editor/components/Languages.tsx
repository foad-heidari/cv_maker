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
import { addLanguage, deleteLanguage, updateLanguage } from "../../../redux/actions/cv_actions/languageActions";
import { AppState } from "../../../redux/Store";


export default function Languages() {
    const languages = useSelector(
        (state: AppState) => state.languages.languages
    );

    const dispatch = useDispatch();
    const { cvId } = useParams();
    const updateLanguageHandler = (data: FieldDataType, save: boolean) => {
        dispatch(updateLanguage({
            id: data.id,
            cv: cvId || "",
            name: data.name,
            level: data.level || "0",
        }, save
        ));
    };

    const addNewField = () => {
        const order = languages.length > 0 ? languages[languages.length - 1].order + 1 : 1;
        dispatch(addLanguage({
            order,
            cv: cvId || "",
        }));
    };
    return (
        <>
            {languages.map((element: FieldDataType) => <InputItem
                fieldsData={(data, save) => updateLanguageHandler(data, save)}
                deleteField={(id: string) => dispatch(deleteLanguage(id))}

                key={element.id}
                element={element}
                inputTitle="Language"
            />)}
            <Divider sx={{ my: 2 }} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={addNewField} variant="outlined" startIcon={<AddCircleIcon />}>
                    Language
                </Button>
            </Grid>
        </>
    );
}
