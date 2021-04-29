import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function ShowEstoque() {
  const classes = useStyles();

  const [estoquesList, setEstoquesList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/estoques').then( (allEstoque) => {
      setEstoquesList(allEstoque.data);
    })
  }, [])

  return (
    <>
    <h3>Estoques Registrados</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Cod</b></TableCell>
            <TableCell align="left"><b>Estoque</b></TableCell>
            <TableCell align="right"><b>Produtos</b></TableCell>
            <TableCell align="right"><b>Itens</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {estoquesList.map((estoque, key) => (
            <TableRow key={key}>
              <TableCell align="right">{estoque.codEstoque}</TableCell>
              <TableCell align="left">{estoque.nomeEstoque}</TableCell>
              <TableCell align="right">{estoque.numProdutos}</TableCell>
              <TableCell align="right">{estoque.unidProdutos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
