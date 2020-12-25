import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import { makeStyles } from '@material-ui/core/styles';

import { theme } from './theme';
import RandomLoadout from './components/RandomLoadout';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: '#000',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <RandomLoadout className={classes.body} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
