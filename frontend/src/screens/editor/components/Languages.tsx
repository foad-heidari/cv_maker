import {
    Button,
    Divider,
    Grid,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import InputItem from "./InputItem";
import { FieldDataType } from "../../../utils/Types";
import { addLanguage, updateLanguage } from "../../../redux/actions/languageActions";
import { AppState } from "../../../redux/Store";


export default function Languages() {
    const languages = useSelector(
        (state: AppState) => state.languages.languages
    );

    const dispatch = useDispatch();

    const updateLanguageHandler = (data: FieldDataType) => {
        dispatch(updateLanguage({
            id: data.id,
            name: data.name,
            level: data.level || "",
        }));
    };

    const addNewField = () => {
        dispatch(addLanguage({
            id: "4",
            name: "",
            level: "",
        }));
    };
    return (
        <>
            {languages.map((element: FieldDataType) => <InputItem
                fieldsData={(data) => updateLanguageHandler(data)}
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
