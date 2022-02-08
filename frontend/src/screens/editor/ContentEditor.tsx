import { Box, Tab, Tabs } from "@mui/material";

import React from "react";
import { tabsClasses } from "@mui/material/Tabs";
import Interests from "./components/Interests";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

interface TabPanelProps {
    children: any;
    value: number;
    index: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


export default function ContentEditor() {
    const [value, setValue] = React.useState(0);
    return (
        <>
            <Box sx={{ bgcolor: "background.paper" }}>
                <Tabs
                    value={value}

                    onChange={(event, newValue) => setValue(newValue)}
                    variant="scrollable"
                    scrollButtons
                    aria-label="CV Content tab"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            "&.Mui-disabled": { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab label="Profile" />
                    <Tab label="Skills" />
                    <Tab label="Interests" />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <Profile />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Skills />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Interests />
                </TabPanel>
            </Box>
        </>
    );
}
