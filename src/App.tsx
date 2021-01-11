import React from 'react';

import { useSelector } from './redux/store';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

function App() {
  const tableData = useSelector((state) => state.table.data);
  const loading = useSelector((state) => state.table.loading);

  return (
    <Container fixed>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row: any, index: number) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.website}</TableCell>
              </TableRow>
            ))}
            {/* <TableCell>

            </TableCell> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
