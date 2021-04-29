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

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

export default function ShowEstoque() {
  const classes = useStyles();

  async function deleteEstoque(id){
    if(window.confirm('Apagar o estoque?')){
      var response = await api.delete('/api/estoques/'+id);
      if(response.status===200){
        alert('Estoque deletado com sucesso.');
        window.location.href='/estoque';
      }else{
        alert('Falha ao deletar o estoque.');
      }
    }
  }

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
    <h3>Estoques Registrados</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Cod</b></TableCell>
            <TableCell align="left"><b>Estoque</b></TableCell>
            <TableCell align="center"><b>Produtos</b></TableCell>
            <TableCell align="center"><b>Itens</b></TableCell>
            <TableCell align="center"><b>Deletar</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {estoquesList.map((estoque, key) => (
            <TableRow key={key}>
              <TableCell align="right" style={{ width: "10%" }}>{estoque.codEstoque}</TableCell>
              <TableCell align="left" style={{ width: "50%" }}>{estoque.nomeEstoque}</TableCell>
              <TableCell align="center" style={{ width: "10%" }}>{estoque.numProdutos}</TableCell>
              <TableCell align="center" style={{ width: "10%" }}>{estoque.numItens}</TableCell>
              <TableCell align="center" style={{ width: "10%"}}> 
                <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteEstoque(estoque._id)}>
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
