import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    tabControl: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    tabPanel: {
        minHeight: '710px'
    },
    indicator: {
        backgroundColor: '#4BD37B',
        height: '5px'
    }
}));

type Props = {
    tabItems: Array<TabItemType>,
    tabPanels: Array<TabPanelType>
};

/**
 * Представление вкладок.
 * @param tabItems Список навигационных раздлеов - вкладок.
 * @param tabPanels Список компонент - содержимых вкладок.
 */
export const FullWidthTabs: React.FC<Props> = ({
    tabItems,
    tabPanels
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={classes.tabControl}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    classes={{indicator: classes.indicator}}
                >
                    {tabItems.map(
                        (tab, index) => <Tab {...a11yProps(index)}
                                             label={tab.label}
                                             key={index} />
                    )}
                </Tabs>
            </AppBar>
            <SwipeableViews
                className={classes.tabPanel}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {tabPanels.map(
                    (tabPanel, index) => (<TabPanel value={value} 
                                                    index={index} 
                                                    dir={theme.direction}
                                                    key={index}>
                        {tabPanel.component}
                    </TabPanel>)
                )}
            </SwipeableViews>
        </div>
    );
}
