import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { InterestType } from "../../../../redux/state/cv_states/interestStates";
import { AppState } from "../../../../redux/Store";

const Interests: React.FC = () => {

    const interests = useSelector(
        (state: AppState) => state.interests.interests
    );

    if (interests.length < 1) return null;
    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <Typography fontWeight={600} textTransform="uppercase">Interests</Typography>
            {interests?.map((item: InterestType) => (
                <Box key={item.id}>
                    <Typography variant="caption">
                        {item.name}
                    </Typography>
                </Box>
            ))}
        </Box>

    );
};

export default Interests; 