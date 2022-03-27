import { Box, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { AppState } from "../../../../redux/Store";
import { ProjectType } from "../../../../redux/state/cv_states/projectStates";



export default function Projects() {
    const projects = useSelector(
        (state: AppState) => state.projects.projects
    );

    if (projects.length < 1) return null;
    return (
        <Box sx={{ mb: 3 }}>
            <SectionHeader icon={<AccountTreeIcon fontSize="small" />} title="Projects" />
            {projects.map((item: ProjectType) => (
                <Box key={item.id} sx={{ mb: 2, lineHeight: 1 }}>
                    <Typography color="primary.main" variant="body2">
                        {item.name}
                    </Typography>
                    <Typography sx={{ lineHeight: 1, whiteSpace: "pre-line" }} variant="caption">{item.description}</Typography>
                </Box>
            ))}
        </Box>
    );
}
