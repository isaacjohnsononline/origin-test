const initialState: ITableState = {
  data: [
    {
      id: '0',
      name: 'test',
      email: 'test@gmail.com',
      website: 'www.test.com',
      phone: '1234123',
    },
  ],
  loading: false,
  error: '',
};

export default function tableReducer(state: ITableState = initialState, action: TTableActions): ITableState {
  switch (action.type) {
    case 'EDIT_DATA':
      return {
        ...state,
        data: state.data.map((item, idx) => {
          if (idx === action.value.row) {
            return { ...item, [action.value.field]: action.value.value };
          }
          return item;
        }),
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
