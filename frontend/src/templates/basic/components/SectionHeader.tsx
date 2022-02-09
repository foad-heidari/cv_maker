import { Avatar, Box, SvgIconProps, Typography } from "@mui/material";


interface Props {
    title: string,
    icon: React.ReactElement<SvgIconProps>
}

export default function SectionHeader(props: Props) {
    const { title, icon } = props;
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "primary.main",
                mb: 2
            }}
        >
            <Avatar sx={{
                bgcolor: "primary.main",
                mr: 1,
                width: 30,
                height: 30,
            }}>
                {icon}

            </Avatar>
            <Typography variant="subtitle1">{title}</Typography>
        </Box>
    );
}
