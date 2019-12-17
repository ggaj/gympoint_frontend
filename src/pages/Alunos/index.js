import React from 'react';

import { Container, TableView } from './styles';

export default function Alunos() {
  return (
    <Container>
      <header>
        <strong>Gerenciando alunos</strong>
        <div>
          <button type="button">Cadastrar</button>
          <input type="text" name="" id="" placeholder="Buscar aluno" />
        </div>
      </header>

      <TableView>
        <table>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th></th>
            <th></th>
          </tr>
        </table>
      </TableView>
    </Container>
  );
}
