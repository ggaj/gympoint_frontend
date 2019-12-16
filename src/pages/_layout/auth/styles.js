import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 40px 20px;
  box-shadow: 0 0 6px #979797;

  div {
    color: #ee4d64;
    font-size: 28px;
    font-weight: bold;
    padding: 10px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    label {
      align-self: flex-start;
      padding: 4px;
    }

    input {
      border: 1px solid #DDDDDD;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      font-size: 16px;
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      font-size: 14px;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.7;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }*/
`;
