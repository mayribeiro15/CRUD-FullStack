import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ShowEstoque from '../components/showEstoque.js';
import CreateEstoque from '../components/createEstoque.js';

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

function Estoques() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Bem vindo a aba de Estoque.</h2>
      <p>Nesta página é possível criar e deletar estoques e visualizar informações 
      <br/>sobre a quantidades de tipos de produtos e o total de itens em cada estoque.</p>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <CreateEstoque/>
          </AppBar>
        </Grid>
        <Grid item xs={8}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <ShowEstoque/>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

export default Estoques;