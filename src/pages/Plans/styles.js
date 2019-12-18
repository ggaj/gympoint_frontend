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
        border-radius: 4px;
        font-size: 14px;
        height: 34px;
      }
    }
  }
`;

export const TableView = styled.table`
  width: 100%;
  border-spacing: 0px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  width: 100%;

  th {
    text-transform: uppercase;

    &:first-child {
      text-align: left;
    }
  }

  tr td {
    text-align: center;
    color: #666666;
    padding: 20px 0px;
    border-bottom: 1px solid #eeeeee;

    &:first-child {
      text-align: left;
    }
  }

  .edit {
    color: #4d85ee !important;
    cursor: pointer;
  }
  .remove {
    color: #de3b3b;
    cursor: pointer;
  }

  tr:last-child td {
    border-bottom: none;
    padding-bottom: 5px;
  }
`;
