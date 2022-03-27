import { Link, Typography } from "@mui/material";


export default function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/foad-heidari/cv_maker">
                This Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}