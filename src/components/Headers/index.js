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
            to="/alunos"
            className={window.location.pathname === '/alunos' ? 'ativo' : ''}
          >
            Alunos
          </Link>
          <Link
            to="/planos"
            className={window.location.pathname === '/planos' ? 'ativo' : ''}
          >
            Planos
          </Link>
          <Link to="/dashboard">Matrículas</Link>
          <Link to="/dashboard">Pedido de Auxílio</Link>
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
