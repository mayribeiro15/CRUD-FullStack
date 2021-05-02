import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../services/api';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '3ch',
  },
  textField: {
    margin: theme.spacing(1),
    width: '100ch',
  },
  margin:{
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  }
}));

export default function UpdateEstoque() {
  const classes = useStyles();

  const { idEstoque } = useParams();

  useEffect(() => {
    async function showEstoque(){
      var response = await api.get('/api/estoques.info/'+idEstoque);
      setEstoque(response.data);
    }
    showEstoque();
  }, [])

  async function editEstoque(){
    if(estoque.nomeEstoque===''||estoque.codEstoque===''){
      alert('Preencha os campos obrigatórios: Código e Nome do Estoque.');
    }else{
      const response = await api.put('/api/estoques/',estoque);
      if(response.status===200){
        alert('Estoque alterado com sucesso!');
        window.location.href='/estoques';
      }else{
        alert('Erro ao alterar estoque!');
      }
    }
  }

  const [estoque, setEstoque] = useState([])

  return (
    <div className={classes.root}>
      <div>
        <h3>Alterar Dados do Estoque</h3>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.textField} style={{ width: "20ch"}}  label="Código" id="standard-size-small" defaultValue=" " value={estoque.codEstoque} onChange={(event) => {
            setEstoque({ ...estoque, codEstoque: event.target.value})
        }} />
        <TextField className={classes.textField} style={{ width: "80ch"}}  label="Nome do Estoque" id="standard-size-small" defaultValue=" " value={estoque.nomeEstoque} onChange={(event) => {
            setEstoque({ ...estoque, nomeEstoque: event.target.value})
        }} />
        </form>
        <Button style={{ width: "30ch", margin: "2ch"}} color="primary" variant="contained" onClick={editEstoque}>
        SALVAR ALTERAÇÕES
        </Button>
        <Button style={{ width: "30ch", margin: "2ch"}} variant="contained" href={'/estoque/'}>
        DESCARTAR ALTERAÇÕES
        </Button>
      </div>
    </div>
  );
}
