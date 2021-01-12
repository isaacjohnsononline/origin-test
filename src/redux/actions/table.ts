import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

type TThunkActions<TReturnType = void> = ThunkAction<TReturnType, IRootState, unknown, TRootActions>;

export const getTableDataFromAPI = (): TThunkActions => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', value: true });

    try {
      const response = await axios.get('https://b6al1lpjff.execute-api.us-east-2.amazonaws.com/users');

      const data = mapTableData(response.data.data);

      dispatch({ type: 'SET_DATA', value: data });
      dispatch({ type: 'SET_META', value: { region: response.data.region, runtime: response.data.runtime } });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', value: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });
    }
  };
};

export const mapTableData = (data: ITableRow[]): ITableRow[] => {
  // basic map to cherry pick some data from the api response for example sake
  return data.map((value: ITableRow) => {
    return { id: value.id, name: value.name, email: value.email, phone: value.phone, website: value.website };
  });
};
