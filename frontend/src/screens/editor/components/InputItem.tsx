import { IconButton, ListItem, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function InputItem() {
    return (
        <ListItem sx={{ px: 0, py: 1, mb: 2 }}>
            <TextField id="standard-basic" variant="standard" />
            <IconButton sx={{ p: 0 }}>
                <ExpandLessIcon />
            </IconButton >
            <IconButton sx={{ p: 0 }}>
                <ExpandMoreIcon />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
                <DeleteOutlineIcon />
            </IconButton>
        </ListItem>
    );
}

export default InputItem;
