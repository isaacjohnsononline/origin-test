import { expect } from 'chai';

import reducer from '../../src/redux/reducers/table';

// initial state
const initialState: ITableState = {
  data: [],
  loading: false,
  error: '',
  region: '',
  runtime: '',
};

// fake data
const data: ITableRow[] = [
  {
    id: '0',
    name: 'bob',
    phone: '12345678',
    email: 'bob@test.com',
    website: 'www.bob.com',
  },
  {
    id: '1',
    name: 'jane',
    phone: '87654321',
    email: 'jane@test.com',
    website: 'www.jane.com',
  },
  {
    id: '2',
    name: 'sarah',
    phone: '65748392',
    email: 'sarah@test.com',
    website: 'www.sarah.com',
  },
];

describe('redux reducers', () => {
  it('returns state on default action', () => {
    expect(reducer(initialState, { type: undefined, value: undefined })).to.deep.equal({
      ...initialState,
    });
  });

  it('handles the SET_LOADING action', () => {
    expect(reducer(initialState, { type: 'SET_LOADING', value: true })).to.deep.equal({
      ...initialState,
      loading: true,
    });
  });

  it('handles the SET_ERROR action', () => {
    const msg = 'error message';
    expect(reducer(initialState, { type: 'SET_ERROR', value: msg })).to.deep.equal({
      ...initialState,
      error: msg,
    });
  });

  it('handles the SET_DATA action', () => {
    const newState = reducer(initialState, { type: 'SET_DATA', value: data });

    expect(newState).to.deep.equal({ ...initialState, data });
    expect(newState.data[0].name == 'bob');
    expect(newState.data[1].name == 'jane');
    expect(newState.data[2].name == 'sarah');
  });

  it('handles the SET_META action', () => {
    const newState = reducer(initialState, { type: 'SET_META', value: { region: 'region', runtime: 'runtime' } });

    expect(newState.region).to.equal('region');
    expect(newState.runtime).to.equal('runtime');
  });

  it('handles the EDIT_DATA action correctly', () => {
    const newState = reducer(initialState, { type: 'SET_DATA', value: data });
    const editName = reducer(newState, { type: 'EDIT_DATA', value: { row: 0, field: 'name', value: 'edited' } });

    expect(editName.data[0].name == 'edited');
  });
});
