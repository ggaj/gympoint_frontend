/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Textarea } from '@rocketseat/unform';

import { Container, Content } from './styles';

export default function Response({ visible }) {
  return (
    <Container visible={visible}>
      <Content>
        <strong>PERGUNTA DO ALUNO</strong>
        <div>
          Como eu faço para desconto? Como eu faço para desconto? Como eu faço
          para desconto? Como eu faço para desconto? Como eu faço para
          desconto?Como eu faço para desconto?Como eu faço para desconto?
        </div>
        <Form>
          <Textarea name="response" label="SUA RESPOSTA" />
          <button type="button">Responder ao aluno</button>
        </Form>
      </Content>
    </Container>
  );
}
