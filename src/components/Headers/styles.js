import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: solid 1px #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;

    div {
      color: #ee4d64;
      padding-left: 10px;
      padding-right: 20px;
      border-right: 1px solid #979797;
    }

    a {
      color: #979797;
      margin-left: 20px;
    }

    .ativo {
      color: #444444;
    }

    a:hover {
      color: #444444;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  strong {
    color: #666666;
  }

  a {
    margin-top: 2px;
    font-size: 12px;
    color: #de3b3b;
  }
`;
