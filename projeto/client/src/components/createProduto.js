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

export default function CreateProduto() {
  const classes = useStyles();
  async function createProduto(){
    if(produto.nomeProduto===''||produto.codProduto===''){
      alert('Preencha todos os dados!');
    }else{
      const response = await api.post('/api/produtos',produto);
      if(response.status===200){
        window.location.href='/produtos';
      }else{
        alert('Erro ao cadastrar novo produto!');
      }
    }
  }

  const [produto, setProduto] = useState({
    nomeProduto: '',
    codProduto: '',
    numEstoques: 0,
    numItensTotal: 0,
    codsEstoque: [],
    numItens: []
  })

  return (
    <>
    <h3>Cadastrar Novo Produto</h3>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{ width: "20ch"}}  label="Código" id="standard-size-small" value={produto.codProduto} onChange={(event) => {
        setProduto({ ...produto, codProduto: event.target.value})
      }} />
      <TextField style={{ width: "30ch"}}  label="Nome do Produto" id="standard-size-small" value={produto.nomeProduto} onChange={(event) => {
        setProduto({ ...produto, nomeProduto: event.target.value})
      }} />
      <p style={{ fontSize: 12, width: "50ch"}}>Para adicionar itens ao estoque, <br/>edite o produto após criar.</p>
      <Button style={{ width: "20ch"}} variant="contained" onClick={createProduto} >
        CRIAR PRODUTO
      </Button>
    </form>
    </>
  );
}
