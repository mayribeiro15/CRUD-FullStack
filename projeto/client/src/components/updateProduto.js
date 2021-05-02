import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../services/api';
import { useParams } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '3ch',
  },
  textField: {
    margin: theme.spacing(1),
    width: '100ch',
    textAlign: 'left',
  },
  margin:{
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  }
}));

export default function UpdateProduto() {
  const classes = useStyles();

  const { idProduto } = useParams();

  useEffect(() => {
    async function showProduto(){
      var response = await api.get('/api/produtos.info/'+idProduto);
      setProduto(response.data);
    }
    showProduto();
    async function showEstoque(){
      const response = await api.get("/api/estoques");
      setEstoquesList(response.data);
    }
    showEstoque();
  }, [])

  async function editProduto(){
    if(produto.nomeProduto===''||produto.codProduto===''){
      alert('Preencha os campos obrigatórios: Código e Nome do Produto.');
    }else{
      const response = await api.put('/api/produtos/',produto);
      if(response.status===200){
        alert('Produto alterado com sucesso!');
        window.location.href='/produtos';
      }else{
        alert('Erro ao alterar produto!');
      }
    }
  }

  const [estoquesList, setEstoquesList] = useState([])

  const [produto, setProduto] = useState([])

  return (
    <div className={classes.root}>
      <div>
        <h3>Alterar Dados do Produto</h3>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.textField} style={{ width: "20ch"}}  label="Código" defaultValue=" " value={produto.codProduto} onChange={(event) => {
            setProduto({ ...produto, codProduto: event.target.value})
        }} />
        <TextField className={classes.textField} style={{ width: "80ch"}}  label="Nome do Produto" defaultValue=" " value={produto.nomeProduto} onChange={(event) => {
            setProduto({ ...produto, nomeProduto: event.target.value})
        }} />
        
        <TextField className={classes.textField} select style={{ width: "20ch"}}  label="NºEstoques" defaultValue="1" value={produto.numEstoques} onChange={(event) => {
          setProduto({ ...produto, numEstoques: event.target.value})
        }}>
            <MenuItem value={1}>1</MenuItem>
        </TextField>
        <TextField className={classes.textField} select style={{ width: "61ch"}}  label="Estoque" defaultValue=" " value={produto.codsEstoque} onChange={(event) => {
          setProduto({ ...produto, codsEstoque: event.target.value})
        }}>
            {estoquesList.map((estoque, key) => (
            <MenuItem value={estoque._id}>{estoque.codEstoque} - {estoque.nomeEstoque}</MenuItem>
            ))}
        </TextField>        
        <TextField className={classes.textField} style={{ width: "61ch"}} label="Quantidades por Estoque" defaultValue=" " value={produto.numItens} onChange={(event) => {
            setProduto({ ...produto, numItens: event.target.value})
        }} />
        </form>
        <Button style={{ width: "30ch", margin: "2ch"}} color="primary" variant="contained" onClick={editProduto}>
        SALVAR ALTERAÇÕES
        </Button>
        <Button style={{ width: "30ch", margin: "2ch"}} variant="contained" href={'/produtos/'}>
        DESCARTAR ALTERAÇÕES
        </Button>
      </div>
    </div>
  );
}
