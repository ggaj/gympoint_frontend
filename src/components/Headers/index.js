import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notification';
import logo from '~/assets/logo-min.svg';

import { Container, Content, Profile } from './styles';

export default function Headers() {
  const user = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <div>gympoint</div>
          <Link to="/dashboard" active="true">
            Alunos
          </Link>
          <Link to="/dashboard" className="ab">
            Planos
          </Link>
          <Link to="/dashboard" className="ab">
            Matrículas
          </Link>
          <Link to="/dashboard" className="ab">
            Pedido de Auxílio
          </Link>
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
