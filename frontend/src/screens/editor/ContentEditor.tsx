import { Box, Tabs, Tab, Typography } from '@mui/material';
import InterestsCard from './components/InterestsCard';
import SkillsCard from './components/SkillsCard';
import { tabsClasses } from '@mui/material/Tabs';
import React from 'react';

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
            <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}

                    onChange={(event, newValue) => setValue(newValue)}
                    variant="scrollable"
                    scrollButtons
                    aria-label="CV Content tab"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab label="Skills" />
                    <Tab label="Interests" />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <SkillsCard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <InterestsCard />
                </TabPanel>
            </Box>
        </>
    );
}
