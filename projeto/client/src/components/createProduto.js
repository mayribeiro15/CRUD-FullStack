import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../services/api';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 10,
    '& > *': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(3),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      width: '25ch',
      textAlign: 'left',
    },
  },
}));

export default function CreateProduto() {
  const classes = useStyles();
  
  async function createProduto(){
    if(produto.nomeProduto===' '||produto.codProduto===' '||produto.numEstoques===''||produto.codsEstoques===''){
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
    nomeProduto: ' ',
    codProduto: ' ',
    numEstoques: ' ',
    codsEstoque: ' ',
    numItens: ' '
  })

  useEffect(() => {
    async function showEstoque(){
      const response = await api.get("/api/estoques");
      setEstoquesList(response.data);
    }
    showEstoque();
  }, [])

  const [estoquesList, setEstoquesList] = useState([])

  return (
    <>
    <h3 style={{ marginBottom: "0.2ch" }}>Cadastrar Novo Produto</h3>
    <p style={{ fontSize: 10, marginBottom: "5ch" }}>Todo produto deve ser cadastrado em ao menos um estoque.</p>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{ width: "10ch"}}  label="Código" id="standard-size-small" value={produto.codProduto} onChange={(event) => {
        setProduto({ ...produto, codProduto: event.target.value})
      }} />
      <TextField style={{ width: "25ch"}}  label="Nome do Produto" id="standard-size-small" value={produto.nomeProduto} onChange={(event) => {
        setProduto({ ...produto, nomeProduto: event.target.value})
      }} />
      <TextField select style={{ width: "15ch"}}  label="NºEstoques" id="standard-size-small" value={produto.numEstoques} onChange={(event) => {
        setProduto({ ...produto, numEstoques: event.target.value})
      }}>
          <MenuItem value={1}>1</MenuItem>
      </TextField>
      <TextField select style={{ width: "37ch"}}  label="Estoque" id="standard-size-small" value={produto.codsEstoque} onChange={(event) => {
        setProduto({ ...produto, codsEstoque: event.target.value})
      }}>
          {estoquesList.map((estoque, key) => (
          <MenuItem value={estoque._id}>{estoque.codEstoque} - {estoque.nomeEstoque}</MenuItem>
          ))}
      </TextField>
      <TextField style={{ width: "15ch"}}  label="Quantidade" id="standard-size-small" value={produto.numItens} onChange={(event) => {
        setProduto({ ...produto, numItens: event.target.value})
      }} />
      <Button style={{ width: "20ch"}} variant="contained" onClick={createProduto}>
        CRIAR PRODUTO
      </Button>
    </form>
    </>
  );
}
