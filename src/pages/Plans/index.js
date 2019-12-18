import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TableView } from './styles';

export default function Plans() {
  return (
    <Container>
      <header>
        <strong>Gerenciando planos</strong>
        <div>
          <Link to="/plans/register">Cadastrar</Link>
        </div>
      </header>

      <TableView>
        <tr>
          <th width="30%">Título</th>
          <th width="30%">Duração</th>
          <th width="20%">Valor p/ mês</th>
          <th width="10%"> </th>
          <th width="10%"> </th>
        </tr>
        <tbody>
          <tr>
            <td width="30%">Start</td>
            <td width="30%">1 mês</td>
            <td width="20%" text-align="center">
              R$ 120,00
            </td>
            <td width="10%" className="edit">
              editar
            </td>
            <td width="10%" className="remove">
              apagar
            </td>
          </tr>
          <tr>
            <td width="30%">Gold</td>
            <td width="30%">3 meses</td>
            <td width="20%" text-align="center">
              R$ 109,00
            </td>
            <td width="10%" className="edit">
              editar
            </td>
            <td width="10%" className="remove">
              apagar
            </td>
          </tr>
          <tr>
            <td width="30%">Diamond</td>
            <td width="30%">6 meses</td>
            <td width="20%" text-align="center">
              R$ 89,00
            </td>
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
