import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function TemplateCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea to="/editor" component={Link}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/templates/basic/img/screenshot.jpg"
                    alt="basic template"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Basic
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
