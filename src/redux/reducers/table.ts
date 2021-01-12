const initialState: ITableState = {
  data: [],
  loading: false,
  error: '',
  region: '',
  runtime: '',
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
        data: action.value,
      };
    case 'SET_META':
      return {
        ...state,
        region: action.value.region,
        runtime: action.value.runtime,
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
