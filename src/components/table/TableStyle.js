import styled from 'styled-components';

const TableContainer = styled.div`
  font-size: 20px;
  table {
    background-color: white;
    border: 1px solid lightgrey;
  }
  th {
    text-align: center;
  }
  tr.item-row:hover {
    cursor: pointer;
    box-shadow:inset 0px 0px 0px 5px #638cce;
  }
`;

export default TableContainer;
