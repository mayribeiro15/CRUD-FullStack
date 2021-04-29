import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateEstoque() {
  const classes = useStyles();

  const createEstoque = () => {
    axios.post('http://localhost:3001/estoques', estoque)
    window.location.reload(false);
  }

  const [estoque, setEstoque] = useState({

    codEstoque: 0,
    nomeEstoque: '',
    numProdutos: 0,
    numItens: 0
  })

  return (
    <>
    <h3>Cadastrar Novo Estoque</h3>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Código do Estoque" id="standard-size-small" size="small" value={estoque.codEstoque} onChange={(event) => {
        setEstoque({ ...estoque, codEstoque: event.target.value})
      }} />
      <TextField label="Nome do Estoque" id="standard-size-small" size="small" value={estoque.nomeEstoque} onChange={(event) => {
        setEstoque({ ...estoque, nomeEstoque: event.target.value})
      }} />
      <TextField label="Código do Estoque" id="standard-size-small" size="small" value={estoque.numProdutos} onChange={(event) => {
        setEstoque({ ...estoque, numProdutos: event.target.value})
      }} />
      <TextField label="Nome do Estoque" id="standard-size-small" size="small" value={estoque.numItens} onChange={(event) => {
        setEstoque({ ...estoque, numItens: event.target.value})
      }} />
      <Button variant="contained" onClick={createEstoque} >
        CRIAR ESTOQUE
      </Button>
    </form>
    </>
  );
}
