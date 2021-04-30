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
      <h2>Bem vindo a aba de Produto!</h2>
      <p>Nesta página é possível criar e deletar produtos e visualizar informações 
      <br/>sobre o total armazenado e a quantidade de estoques envolvidos.
      <br/>Além disso, é possível editar as quantidades e estoques de cada produto.</p>
        <Grid item xs={12}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <ShowProduto/>
          </AppBar>
        </Grid>
    </div>
  );
}

export default Produtos;