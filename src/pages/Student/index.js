import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TableView } from './styles';

export default function Alunos() {
  return (
    <Container>
      <header>
        <strong>Gerenciando alunos</strong>
        <div>
          <Link to="/student/register">Cadastrar</Link>
          <input type="text" name="" id="" placeholder="Buscar aluno" />
        </div>
      </header>

      <TableView>
        <tr>
          <th width="40%">Nome</th>
          <th width="34%">E-mail</th>
          <th width="14%">Idade</th>
          <th width="6%"> </th>
          <th width="6%"> </th>
        </tr>
        <tbody>
          <tr>
            <td width="40%">Gildo Gomes de Araujo Junior</td>
            <td width="34%">gildoaraujo@teste.com.br</td>
            <td width="14%">33</td>
            <td width="6%" className="edit">
              editar
            </td>
            <td width="6%" className="remove">
              apagar
            </td>
          </tr>
          <tr>
            <td width="40%">Gildo Gomes de Araujo Junior</td>
            <td width="34%">gildoaraujo@teste.com.br</td>
            <td width="14%">33</td>
            <td width="6%" className="edit">
              editar
            </td>
            <td width="6%" className="remove">
              apagar
            </td>
          </tr>
        </tbody>
      </TableView>
    </Container>
  );
}
