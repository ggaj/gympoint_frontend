import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  max-width: 1200px;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    strong {
      font-size: 24px;
      font-weight: bold;
      color: #444444;
    }

    div {
      button {
        text-transform: uppercase;
        padding: 7px 10px 7px 30px;
        border: none;
        color: #fff;
        background: #ee4d64;
        border-radius: 4px;
        font-size: 14px;
        margin-right: 10px;
        height: 34px;
      }

      input {
        padding: 7px 10px 7px 28px;
        border: 1px solid #dddddd;
        width: 240px;
        border-radius: 4px;
        height: 36px;
      }
    }
  }
`;

export const TableView = styled.table`
  margin-top: 40px;
  width: 100%;
  border-spacing: 0px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  width: 100%;

  th {
    text-align: left;
    text-transform: uppercase;
  }

  tr td {
    color: #666666;
    padding: 20px 0px;
    border-bottom: 1px solid #eeeeee;
  }

  .edit {
    color: #4d85ee !important;
  }
  .remove {
    color: #de3b3b;
  }

  tr:last-child td {
    border-bottom: none;
    padding-bottom: 5px;
  }
`;
