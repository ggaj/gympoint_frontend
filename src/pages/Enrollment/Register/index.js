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
          <Link className="back" to="/enrollment">
            Voltar
          </Link>
          <Link to="Link">Salvar</Link>
        </div>
      </header>

      <Form>
        <Input name="name" label="ALUNO" placeholder="Buscar aluno" />
        <div>
          <div>
            <Input name="age" label="PLANO" placeholder="Selecione o plano" />
          </div>
          <div>
            <Input
              name="weight"
              type="date"
              label="DATA DE INÍCIO"
              placeholder="Escolha a data"
            />
          </div>
          <div>
            <Input name="height" label="DATA DE TÉRMINO" className="readonly" />
          </div>
          <div>
            <Input name="height" label="VALOR FINAL" className="readonly" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
