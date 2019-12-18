import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-min.svg';

import { Container, Content, Profile } from './styles';

export default function Headers() {
  // const user = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <div>gympoint</div>
          <Link
            to="/student"
            className={
              window.location.pathname === '/student' ||
              window.location.pathname === '/student/register'
                ? 'ativo'
                : ''
            }
          >
            Alunos
          </Link>
          <Link
            to="/plans"
            className={
              window.location.pathname === '/plans' ||
              window.location.pathname === '/plans/register'
                ? 'ativo'
                : ''
            }
          >
            Planos
          </Link>
          <Link
            to="/enrollment"
            className={
              window.location.pathname === '/enrollment' ||
              window.location.pathname === '/enrollment/register'
                ? 'ativo'
                : ''
            }
          >
            Matrículas
          </Link>
          <Link
            to="/help"
            className={
              window.location.pathname === '/help' ||
              window.location.pathname === '/help/register'
                ? 'ativo'
                : ''
            }
          >
            Pedido de Auxílio
          </Link>
          <Link to="/help1">Resposta</Link>
        </nav>
        <aside>
          <Profile>
            <strong>Gildo Gomes</strong>
            <Link to="/profile">sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
