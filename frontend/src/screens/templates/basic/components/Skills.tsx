import { Box } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import LinearProgressItem from "./LinearProgressItem";
import { AppState } from "../../../../redux/Store";


export default function Skills() {
    const skills = useSelector(
        (state: AppState) => state.skills.skills
    );

    if (skills.length < 1) return null;
    return (
        <Box sx={{ mb: 3 }}>
            <SectionHeader icon={<RocketIcon fontSize="small" />} title="Skills" />
            {skills.map(item => (
                <LinearProgressItem key={item.id} value={Number(item.level)} text={item.name} />
            ))}

        </Box>
    );
}
