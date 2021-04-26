import React from 'react';

function Home() {
  return (
    <div style={{ height: 400, width: '80%', marginLeft: '10%'}}>
      <h2>Bem vindo ao Sistema de Controle de Estoque!</h2>
      <p>No menu ao lado é possível acessar as funcionalidades do Sistema.
      <br/>Na aba <b>Produtos</b> é possível adicionar, remover e editar produtos.
      <br/>Na aba <b>Estoque</b> é possível adicionar, remover e editar estoques.
      <br/>Na aba <b>Listagem</b> é possível observar a relação completa de produtos, além da 
      <br/>opção de filtrar e classificar os itens de acordo com o estoque e quantidade disponível.
      </p>
    </div>
  );
}

export default Home;