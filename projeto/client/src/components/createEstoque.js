import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 10,
    '& > *': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(3),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateEstoque() {
  const classes = useStyles();
  async function createEstoque(){
    if(estoque.nomeEstoque===''||estoque.codEstoque===''){
      alert('Preencha todos os dados!');
    }else{
      const response = await api.post('/api/estoques',estoque);
      if(response.status===200){
        window.location.href='/estoque';
      }else{
        alert('Erro ao cadastrar novo estoque!');
      }
    }
  }

  const [estoque, setEstoque] = useState({
    codEstoque: '',
    nomeEstoque: '',
    numProdutos: 0,
    numItens: 0
  })

  return (
    <>
    <h3>Cadastrar Novo Estoque</h3>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{ width: "20ch"}}  label="Código" id="standard-size-small" value={estoque.codEstoque} onChange={(event) => {
        setEstoque({ ...estoque, codEstoque: event.target.value})
      }} />
      <TextField style={{ width: "30ch"}}  label="Nome do Estoque" id="standard-size-small" value={estoque.nomeEstoque} onChange={(event) => {
        setEstoque({ ...estoque, nomeEstoque: event.target.value})
      }} />
      <Button style={{ width: "20ch"}} variant="contained" onClick={createEstoque} >
        CRIAR ESTOQUE
      </Button>
    </form>
    </>
  );
}
