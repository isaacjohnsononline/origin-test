import React from 'react';

import { useSelector, useDispatch } from './redux/store';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import EditableCell from './components/EditableCell';

function App() {
  const tableData = useSelector((state) => state.table.data);
  const loading = useSelector((state) => state.table.loading);

  const dispatch = useDispatch();

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
                <EditableCell index={index} label={'name'} initialValue={row.name} dispatch={dispatch} />
                <EditableCell index={index} label={'email'} initialValue={row.email} dispatch={dispatch} />
                <EditableCell index={index} label={'phone'} initialValue={row.phone} dispatch={dispatch} />
                <EditableCell index={index} label={'website'} initialValue={row.website} dispatch={dispatch} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
