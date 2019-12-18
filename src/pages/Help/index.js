import React, { useState } from 'react';
import Response from './Response';
import { Container, TableView } from './styles';

export default function Plans() {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <header>
        <strong>Pedidos de auxílio</strong>
      </header>

      <Response visible={visible} />
      <TableView>
        <tr>
          <th width="80%">Aluno</th>
          <th width="20%"> </th>
        </tr>
        <tbody>
          <tr>
            <td width="80%">Start</td>
            <td width="20%" className="edit">
              <button type="button" onClick={() => setVisible(!visible)}>
                responder
              </button>
            </td>
          </tr>
          <tr>
            <td width="80%">Start</td>
            <td width="20%" className="edit">
              responder
            </td>
          </tr>
        </tbody>
      </TableView>
    </Container>
  );
}
