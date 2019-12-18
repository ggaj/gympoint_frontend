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
          <th width="10%"> </th>
          <th width="10%"> </th>
        </tr>
        <tbody>
          <tr>
            <td width="40%">Gildo Gomes de Araujo Junior</td>
            <td width="30%">gildoaraujo@teste.com.br</td>
            <td width="10%">33</td>
            <td width="10%" className="edit">
              editar
            </td>
            <td width="10%" className="remove">
              apagar
            </td>
          </tr>
          <tr>
            <td width="40%">Gildo Gomes de Araujo Junior</td>
            <td width="30%">gildoaraujo@teste.com.br</td>
            <td width="10%">33</td>
            <td width="10%" className="edit">
              editar
            </td>
            <td width="10%" className="remove">
              apagar
            </td>
          </tr>
        </tbody>
      </TableView>
    </Container>
  );
}
