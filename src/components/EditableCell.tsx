import React, { useState } from 'react';

import TableCell from '@material-ui/core/TableCell';
import { Input } from '@material-ui/core';

type TTableRowProps = {
  initialValue: string;
  dispatch: any;
  index: number;
  label: string;
};

function EditableCell({ index, initialValue, dispatch, label }: TTableRowProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <TableCell>
      <Input
        value={value}
        onChange={(event: React.ChangeEvent<{ value: string }>) => {
          setValue(event.target.value);
          dispatch({
            type: 'EDIT_DATA',
            value: { row: index, field: label, value: event.target.value },
          });
        }}
      />
    </TableCell>
  );
}

export default EditableCell;
