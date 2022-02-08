import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SvgIconProps,
    TextField,
    Typography,
} from "@mui/material";
import React, { SyntheticEvent } from "react";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FieldDataType } from "../../../types/EditorTypes";

interface InputProps {
    inputTitle: string;
    hideLevel?: boolean;
    element: FieldDataType;
    Icon?: React.ReactElement<SvgIconProps>
}

function InputItem(props: InputProps) {
    const { inputTitle, hideLevel, element, Icon } = props;
    const [level, setLevel] = React.useState<string>(element.level ? element.level : "");
    const [value, setValue] = React.useState(element.value);
    const [expanded, setExpanded] = React.useState(element.id);


    const handleChange = (panel: number) => (event: SyntheticEvent<Element, Event>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : 0);
    };
    return (
        <Accordion expanded={expanded === element.id} onChange={handleChange(element.id)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"

            >
                {Icon}
                <Typography>{value}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth value={value} onChange={(e) => { setValue(e.target.value); }} placeholder={`Enter your ${inputTitle}`} variant="standard" />
                    </Grid>
                    {!hideLevel ?
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="standard" >
                                <InputLabel id="level-label">Level</InputLabel>
                                <Select
                                    labelId="level-label"
                                    id="level"
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                    label="Level"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="20%">20%</MenuItem>
                                    <MenuItem value="40%">40%</MenuItem>
                                    <MenuItem value="60%">60%</MenuItem>
                                    <MenuItem value="80%">80%</MenuItem>
                                    <MenuItem value="100%">100%</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> : null
                    }

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mt: 2 }}
                    >
                        <IconButton>
                            <DeleteOutlineIcon />
                        </IconButton>
                        <div>
                            <IconButton>
                                <ExpandLessIcon />
                            </IconButton >
                            <IconButton>
                                <ExpandMoreIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>

            </AccordionDetails>
        </Accordion>
    );
}

export default InputItem;
