import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../services/api';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

export default function ShowProduto() {
  const classes = useStyles();

  async function deleteProduto(id){
    if(window.confirm('Apagar o produto em todos os estoques?')){
      var response = await api.delete('/api/produtos/'+id);
      if(response.status===200){
        alert('Produto deletado com sucesso.');
        window.location.href='/produtos';
      }else{
        alert('Falha ao deletar o produto.');
      }
    }
  }

  useEffect(() => {
    async function showProdutos(){
      const response = await api.get("/api/produtos");
      setProdutosList(response.data);
    }
    showProdutos();
  }, [])

  const [produtosList, setProdutosList] = useState([])

  return (
    <>
    <h3>Produtos Registrados</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Cod</b></TableCell>
            <TableCell align="left"><b>Produto</b></TableCell>
            <TableCell align="center"><b>Estoques</b></TableCell>
            <TableCell align="center"><b>Itens</b></TableCell>
            <TableCell align="center"><b>Editar</b></TableCell>
            <TableCell align="center"><b>Deletar</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtosList.map((produto, key) => (
            <TableRow key={key}>
              <TableCell align="right" style={{ width: "10%" }}>{produto.codProduto}</TableCell>
              <TableCell align="left" style={{ width: "50%" }}>{produto.nomeProduto}</TableCell>
              <TableCell align="center" style={{ width: "10%" }}>{produto.numEstoques}</TableCell>
              <TableCell align="center" style={{ width: "10%" }}>{produto.numItensTotal}</TableCell>
              <TableCell align="center" style={{ width: "10%"}}> 
                <IconButton aria-label="delete" className={classes.margin}>
                <CreateIcon fontSize="small" /></IconButton>
              </TableCell>
              <TableCell align="center" style={{ width: "10%"}}> 
                <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteProduto(produto._id)}>
                <DeleteIcon fontSize="small" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
