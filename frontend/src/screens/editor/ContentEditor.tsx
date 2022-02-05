
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Divider,
    Grid,
    List,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import InputItem from './components/InputItem';


export default function ContentEditor() {

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <PsychologyIcon sx={{ mr: 1 }} />
                    <Typography>Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ p: 0 }}>
                        <Divider component="li" />
                        <InputItem />

                    </List>

                    <Divider sx={{ mb: 2 }} />
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button variant="outlined" startIcon={<AddCircleIcon />}>
                            Skill
                        </Button>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
