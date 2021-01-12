/**
 * Table Interfaces
 */
interface ITableState {
  data: ITableRow[];
  loading: boolean;
  error: string;
  region: string;
  runtime: string;
}

interface ITableSetData {
  type: 'SET_DATA';
  value: ITableState['data'];
}

interface ITableSetMeta {
  type: 'SET_META';
  value: {
    region: string;
    runtime: string;
  };
}

interface ITableEditCell {
  type: 'EDIT_DATA';
  value: {
    row: number;
    field: keyof ITableRow;
    value: string;
  };
}

interface ITableSetError {
  type: 'SET_ERROR';
  value: string;
}

interface ITableSetLoading {
  type: 'SET_LOADING';
  value: boolean;
}

interface ITableUndefined {
  type: undefined;
  value: undefined;
}

interface ITableRow {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

/**
 * Table Types
 */
type TTableActions =
  | ITableSetData
  | ITableEditCell
  | ITableSetError
  | ITableSetLoading
  | ITableSetMeta
  | ITableUndefined;

/**
 * Root Interfaces
 */
interface IRootState {
  table: ITableState;
}

/**
 * Root Types
 */
type TRootActions = TTableActions;
