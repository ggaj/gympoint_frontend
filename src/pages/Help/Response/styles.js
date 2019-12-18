import styled from 'styled-components';

export const Container = styled.div`
  widht: 100%;
  height: 100%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  padding-top: 50px;
  background: rgba(1, 1, 1, 0.6);
`;

export const Content = styled.div`
  width: 450px;
  height: fit-content;
  border: 1px solid #eee;
  background: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  strong {
    font-size: 13px;
    font-weight: bold;
    padding-bottom: 5px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      padding: 15px 0px 8px;
      font-size: 13px;
      font-weight: bold;
    }

    textarea {
      height: 120px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      margin-top: 10px;
      background: #ee4d64;
      padding: 10px;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  }
`;
