import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});

function createData(codEstoque, nomeEstoque, numProdutos, unidProdutos, edit, delet) {
  return { codEstoque, nomeEstoque, numProdutos, unidProdutos, edit, delet };
}

const rows = [
  createData(21, 'Rio de Janeiro', 0, 0, 'edit', 'delete'),
  createData(11, 'São Paulo', 0, 0, 'edit', 'delete'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Codigo</b></TableCell>
            <TableCell align="left"><b>Estoque</b></TableCell>
            <TableCell align="right"><b>Produtos</b></TableCell>
            <TableCell align="right"><b>Itens</b></TableCell>
            <TableCell align="right"><b>Editar</b></TableCell>
            <TableCell align="right"><b>Deletar</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.codEstoque}>
              <TableCell align="right">{row.codEstoque}</TableCell>
              <TableCell align="left">{row.nomeEstoque}</TableCell>
              <TableCell align="right">{row.numProdutos}</TableCell>
              <TableCell align="right">{row.unidProdutos}</TableCell>
              <TableCell align="right">{row.edit}</TableCell>
              <TableCell align="right">{row.delet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
