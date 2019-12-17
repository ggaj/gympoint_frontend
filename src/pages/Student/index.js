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
        <tr>
          <th width="40%">Nome</th>
          <th width="30%">E-mail</th>
          <th width="10%">Idade</th>
          <td width="10%"> </td>
          <td width="10%"> </td>
        </tr>
        <tr>
          <td width="40%">Gildo Gomes de Araujo Junior</td>
          <td width="30%" />
          <td width="10%" />
          <td width="10%" />
          <td width="10%" />
        </tr>
        <tr>
          <td width="40%">Gildo Gomes de Araujo Junior</td>
          <td width="30%" />
          <td width="10%" />
          <td width="10%" />
          <td width="10%" />
        </tr>
      </TableView>
    </Container>
  );
}
