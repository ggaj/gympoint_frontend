import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Register() {
  return (
    <Container>
      <header>
        <strong>Cadastro de aluno</strong>
        <div>
          <Link className="back" to="/plans">
            Voltar
          </Link>
          <Link to="Link">Salvar</Link>
        </div>
      </header>

      <Form>
        <Input name="name" label="NOME COMPLETO" />
        <Input name="email" type="email" label="ENDEREÇO DE E-MAIL" />
        <div>
          <div>
            <Input name="age" label="IDADE" />
          </div>
          <div>
            <Input name="weight" label="PESO (em kg)" />
          </div>
          <div>
            <Input name="height" label="ALTURA" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
