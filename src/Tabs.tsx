import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { TabPanel } from './TabPanel';
import { LingUIProvider } from './examples/lingui/components/LingUIProvider';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const SimpleTabs: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="React-i18next" {...a11yProps(0)} />
          <Tab label="LinguiJS" {...a11yProps(1)} />
          <Tab label="React-intl" {...a11yProps(2)} />
          <Tab label="Globalize" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LingUIProvider />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
};
