import React from 'react';
import { Box, Typography } from '@material-ui/core';

type TabPanelProps = {
  value: number;
  index: number;
};

export const TabPanel: React.FC<React.PropsWithChildren<TabPanelProps>> = ({
  value,
  index,
  children,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};
