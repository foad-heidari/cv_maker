import { Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SectionHeader from "./SectionHeader";
import LinearProgressItem from "./LinearProgressItem";

export default function Skills() {
    return (
        <Box sx={{ mb: 3 }}>
            <SectionHeader icon={<WorkIcon fontSize="small" />} title="Skills" />
            <LinearProgressItem value={80} text="Python" />
            <LinearProgressItem value={100} text="Django" />
            <LinearProgressItem value={70} text="ReactJs" />
            <LinearProgressItem value={50} text="NodeJs" />
        </Box>
    );
}
