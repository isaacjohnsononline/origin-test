const initialState: ITableState = {
  data: [],
  loading: false,
  error: '',
};

export default function tableReducer(state: ITableState = initialState, action: TTableActions): ITableState {
  switch (action.type) {
    case 'EDIT_DATA':
      return {
        ...state,
      };
    case 'SET_DATA':
      return {
        ...state,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.value,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.value,
      };

    default:
      return state;
  }
}
