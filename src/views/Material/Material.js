import React from 'react';
import {
  Button,
  Checkbox,
  Container,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { orange, pink } from '@material-ui/core/colors';


// Styles for checkbox (specific styling)
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
}));


// Custom checkbox
const MyCheckbox = () => {
  const { root, checked } = useStyles();

  return <Checkbox classes={{ root, checked }} />;
};

// Main theme (changes defaults)
const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: pink,
  },
});

// Button styles (specific styling)
const useBtnStyles = makeStyles(() => ({
  label: {
    color: '#000000',
  },
}));

const Material = () => {
  const { label } = useBtnStyles();

  return (
    <div>
      <Checkbox />
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" classes={{ label }}>
          Hello World
        </Button>
        <MyCheckbox />
      </ThemeProvider>

      <Box color="white" bgcolor="#333" p={2} m={1} borderRadius={15}>JSS</Box>
      <Container maxWidth="sm">
        <Box
          p={2}
          m={1}
          display="flex"
          color="black"
          bgcolor="#bbb"
          borderRadius={15}
          alignItems="center"
          justifyContent="center"
        >
          JSS
        </Box>
      </Container>
    </div>
  );
};

export default Material;
