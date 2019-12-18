import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  max-width: 900px;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0px;

    strong {
      font-size: 24px;
      font-weight: bold;
      color: #444444;
    }

    div {
      a {
        text-transform: uppercase;
        padding: 7px 10px 7px 30px;
        border: none;
        color: #fff;
        background: #ee4d64;
        // border: 1px solid #dddddd;
        border-radius: 4px;
        font-size: 14px;
        margin-right: 10px;
        height: 36px;
        width: 116px;
      }

      .back {
        background: #cccccc;
        border: 1px solid #dddddd;
      }
    }
  }

  form {
    background: #fff;
    border-radius: 4px;
    padding: 30px;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      width: 100%;

      div {
        display: flex;
        flex-direction: column;

        input {
          margin-right: 20px;
        }

        &:last-child input {
          margin-right: 0px;
        }
      }
    }

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 10px;
    }

    label {
      margin: 15px 0px 5px;
      font-weight: bold;
    }
  }
`;
