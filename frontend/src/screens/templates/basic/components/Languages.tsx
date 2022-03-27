import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { LanguageType } from "../../../../redux/state/cv_states/languageState";
import { AppState } from "../../../../redux/Store";

export default function Languages() {
    const languages = useSelector(
        (state: AppState) => state.languages.languages
    );

    if (languages.length < 1) return null;
    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <Typography fontWeight={600} textTransform="uppercase">Languages</Typography>
            {languages.map((item: LanguageType) => (
                <Box key={item.id}>
                    <Typography variant="caption">
                        {item.name}
                    </Typography>
                    <Typography color={grey[300]} variant="caption"> {(item.level && item.level !== "0") ? `(${item.level}%)` : ""} </Typography>
                </Box>
            ))}

        </Box>

    );
}
