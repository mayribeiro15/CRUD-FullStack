import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ShowProduto from '../components/showProduto.js';
import CreateProduto from '../components/createProduto.js';

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

function Produtos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Bem vindo a aba de Produtos.</h2>
      <p>Nesta página é possível criar/deletar produtos, editar informações 
      <br/>e adicionar/remover de estoques pré existentes.</p>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <ShowProduto/>
          </AppBar>
        </Grid>
        <Grid item xs={6}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <CreateProduto/>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

export default Produtos;