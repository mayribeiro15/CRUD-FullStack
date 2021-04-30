import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'codEstoque', headerName: 'Cod Estoque', width: 150 },
  { field: 'nomeEstoque', headerName: 'Estoque', width: 150 },
  { field: 'codProduto', headerName: 'Cod Produto', width: 150 },
  { field: 'nomeProduto', headerName: 'Produto', width: 150 },
  { field: 'unidDisponiveis', headerName: 'Unidades', width: 130 },
  
];

const rows = [
  { id:1, codEstoque: '021', nomeEstoque:'Rio de Janeiro', 
  codProduto:'001', nomeProduto:'Caneta Azul', unidDisponiveis: 35 },
  { id:2, codEstoque: '021', nomeEstoque:'Rio de Janeiro', 
  codProduto:'002', nomeProduto:'Caneta Vermelha', unidDisponiveis: 21 },
  { id:3, codEstoque: '021', nomeEstoque:'Rio de Janeiro', 
  codProduto:'003', nomeProduto:'Caneta Preta', unidDisponiveis: 5 },
  { id:4, codEstoque: '011', nomeEstoque:'São Paulo', 
  codProduto:'001', nomeProduto:'Caneta Azul', unidDisponiveis: 39 },
  { id:5, codEstoque: '011', nomeEstoque:'São Paulo', 
  codProduto:'003', nomeProduto:'Caneta Preta', unidDisponiveis: 40 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '80%', marginLeft: '10%'}}>
      <h2>Listagem de Produtos e Estoques</h2>
      <p>Nesta página é possível visualizar os produtos em cada estoque específico.
      <br/>Existem opções de classificação e filtro para cada coluna de dados.
      <br/>Além disso, é possível deletar produtos no estoque.</p>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
