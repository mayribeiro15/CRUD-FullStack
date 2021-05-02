import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import UpdateEstoque from '../components/updateEstoque.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 400, 
    width: '80%', 
    marginLeft: '10%',
  },
  appBar: {
    borderRadius: 15,
    margin:'30px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

function EstoquesAlterar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <UpdateEstoque/>
          </AppBar>
        </Grid>
    </div>
  );
}

export default EstoquesAlterar;