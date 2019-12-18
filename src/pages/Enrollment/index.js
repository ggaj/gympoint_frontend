import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TableView } from './styles';

export default function Plans() {
  return (
    <Container>
      <header>
        <strong>Gerenciando matrículas</strong>
        <div>
          <Link to="/enrollment/register">Cadastrar</Link>
        </div>
      </header>

      <TableView>
        <tr>
          <th width="20%">Aluno</th>
          <th width="20%">Plano</th>
          <th width="20%">Início</th>
          <th width="20%">Término</th>
          <th width="14%">Ativa</th>
          <th width="8%"> </th>
          <th width="8%"> </th>
        </tr>
        <tbody>
          <tr>
            <td widtd="20%">Aluno</td>
            <td widtd="20%">Plano</td>
            <td widtd="20%">Início</td>
            <td widtd="20%">Término</td>
            <td widtd="14%">Ativa</td>

            <td width="8%" className="edit">
              editar
            </td>
            <td width="8%" className="remove">
              apagar
            </td>
          </tr>
        </tbody>
      </TableView>
    </Container>
  );
}
