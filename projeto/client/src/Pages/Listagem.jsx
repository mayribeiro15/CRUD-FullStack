import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ShowListagem from '../components/showListagem.js';

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

export default function DataGridDemo() {
  const classes = useStyles();
  return (
    <div style={{ height: 400, width: '80%', marginLeft: '10%'}}>
      <h2>Listagem de Produtos e Estoques</h2>
      <p>Nesta página é possível visualizar os produtos em cada estoque específico,
      <br/>com opção de deleção de cada item.</p>
      <Grid item xs={12}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <ShowListagem/>
          </AppBar>
      </Grid>
    </div>
  );
}
