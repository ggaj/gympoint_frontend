import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit() {}

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onClick={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input name="password" type="password" placeholder="Sua senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="password"
          type="password"
          placeholder="Confirmaão de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair Gobarber
      </button>
    </Container>
  );
}
