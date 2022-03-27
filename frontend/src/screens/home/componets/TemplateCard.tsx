import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { CVType } from "../../../redux/state/cv_states/cvStates";


interface propsType {
    item: CVType;
}

export default function TemplateCard(props: propsType) {
    const { item } = props;
    return (
        <Card>
            <CardActionArea to={`/editor/${item.id}`} component={Link}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/templates/basic/img/screenshot.jpg"
                    alt="basic template"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Basic CV
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {item.created_at}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
