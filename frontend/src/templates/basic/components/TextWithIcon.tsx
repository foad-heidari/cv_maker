import { Box, Divider, SvgIconProps, Typography } from "@mui/material";

interface Props {
    text: string;
    icon: React.ReactElement<SvgIconProps>;
}

export default function TextWithIcon(props: Props) {
    const { text, icon } = props;
    return (
        <>
            <Box color="white">
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {icon}
                    <Typography variant="caption">{text}</Typography>
                </Box>
            </Box>
            <Divider light sx={{ my: 0.5 }} />
        </>
    );
}
