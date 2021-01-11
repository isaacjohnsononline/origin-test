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
import { Input } from '@material-ui/core';

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
                <TableCell>
                  <Input
                    value={row.name}
                    onChange={(event: React.ChangeEvent<{ value: string }>) => {
                      dispatch({
                        type: 'EDIT_DATA',
                        value: { row: index, field: 'name', value: event.target.value },
                      });
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.email}
                    onChange={(event: React.ChangeEvent<{ value: string }>) => {
                      dispatch({
                        type: 'EDIT_DATA',
                        value: { row: index, field: 'email', value: event.target.value },
                      });
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.phone}
                    onChange={(event: React.ChangeEvent<{ value: string }>) => {
                      dispatch({
                        type: 'EDIT_DATA',
                        value: { row: index, field: 'phone', value: event.target.value },
                      });
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.website}
                    onChange={(event: React.ChangeEvent<{ value: string }>) => {
                      dispatch({
                        type: 'EDIT_DATA',
                        value: { row: index, field: 'website', value: event.target.value },
                      });
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
