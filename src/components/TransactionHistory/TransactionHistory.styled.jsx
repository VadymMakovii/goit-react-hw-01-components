import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  text-align: center;
  text-transform: capitalize;
  width: 650px;
  font-size: 14px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.12),
    0px 1px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px 1px rgba(0, 0, 0, 0.2);
  color: rgb(116, 116, 116);
  border-radius: 10px;
  overflow: hidden;
`;

export const TableHeaderCell = styled.th`
  padding: 15px 0px;
`;

export const TableCell = styled.td`
  padding: 15px 0px;
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #ffffff;
  };
  tr:nth-child(even) {
    background-color: #d8d8d8ba;
  };
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #24a2d8;
  color: white;
`;

export const TableRow = styled.tr``;
