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
    SelectChangeEvent,
    SvgIconProps,
    TextField,
    Typography,
} from "@mui/material";
import React, { SyntheticEvent } from "react";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FieldDataType } from "../../../utils/Types";


interface InputProps {
    inputTitle: string;
    element: FieldDataType;
    hideLevel?: boolean;
    showDescription?: boolean;
    showDate?: boolean;
    showCompany?: boolean;
    showlocation?: boolean;
    Icon?: React.ReactElement<SvgIconProps>;
    fieldsData: (data: FieldDataType, save: boolean) => void;
    deleteField: (id: string) => void;
}

function InputItem(props: InputProps) {
    const { inputTitle, hideLevel, showDescription, showlocation, showCompany, showDate, element, Icon, fieldsData, deleteField } = props;
    const [data, setData] = React.useState<FieldDataType>({
        id: element.id,
        name: element.name,
        level: element.level,
        description: element.description,
        startDate: element.startDate,
        endDate: element.endDate,
        location: element.location,
        company: element.company,
    });
    const [expanded, setExpanded] = React.useState(element.id);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent, save = false) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
        fieldsData({
            ...data, [e.target.name]: e.target.value
        }, save);

    };

    const handleChange = (panel: string) => (event: SyntheticEvent<Element, Event>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : "");
    };
    return (
        <Accordion expanded={expanded === element.id} onChange={handleChange(element.id)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"

            >
                {Icon}
                <Typography>{data.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="name"
                            value={data.name}
                            onChange={(e) => changeHandler(e)}
                            onBlur={(e) => changeHandler(e, true)}
                            label={inputTitle}
                            variant="standard" />
                    </Grid>
                    {!hideLevel ?
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="standard" >
                                <InputLabel id="level-label">Level</InputLabel>
                                <Select
                                    labelId="level-label"
                                    name="level"
                                    value={data.level}
                                    onChange={(e) => { changeHandler(e); }}
                                    onBlur={(e) => changeHandler(e, true)}
                                    label="Level"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="20">20%</MenuItem>
                                    <MenuItem value="40">40%</MenuItem>
                                    <MenuItem value="60">60%</MenuItem>
                                    <MenuItem value="80">80%</MenuItem>
                                    <MenuItem value="100">100%</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> : null
                    }

                    {showDate && <>
                        <Grid item xs={6}>
                            <TextField
                                name="startDate"
                                label="Start Date"
                                value={data.startDate}
                                onChange={(e) => changeHandler(e)}
                                onBlur={(e) => changeHandler(e, true)}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="endDate"
                                label="End Date"
                                value={data.endDate}
                                onChange={(e) => changeHandler(e)}
                                onBlur={(e) => changeHandler(e, true)}
                                variant="standard"
                            />
                        </Grid>
                    </>
                    }

                    {showCompany &&
                        <Grid item xs={12}>
                            <TextField
                                name="company"
                                label="Name"
                                value={data.company}
                                fullWidth
                                onChange={(e) => changeHandler(e)}
                                onBlur={(e) => changeHandler(e, true)}
                                variant="standard"
                            />
                        </Grid>
                    }

                    {showlocation &&
                        <Grid item xs={12}>
                            <TextField
                                label="Location"
                                name="location"
                                value={data.location}
                                fullWidth
                                onChange={(e) => changeHandler(e)}
                                onBlur={(e) => changeHandler(e, true)}
                                variant="standard"
                            />
                        </Grid>
                    }

                    {showDescription && <Grid item xs={12}>
                        <TextField
                            name="description"
                            label="Description"
                            value={data.description}
                            onChange={(e) => changeHandler(e)}
                            onBlur={(e) => changeHandler(e, true)}
                            multiline
                            rows={4}
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    }

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mt: 2 }}
                    >
                        <IconButton onClick={() => deleteField(data.id)}>
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
