import {
  GET_DEPUTIES,
  GET_DEPUTIES_SUCCESS,
} from '../types';

import apiClient from '../../clients/api';


const getDeputiesSuccess = (dispatch, data) => {
  dispatch({
    type: GET_DEPUTIES_SUCCESS,
    payload: {
      listOfDeputies: data.dados,
      pagination: data.links,
    },
  });
};

export const getDeputies = () => (dispatch) => {
  dispatch({ type: GET_DEPUTIES });
  apiClient.get('/deputados?itens=25')
    .then(({ data }) => {
      getDeputiesSuccess(dispatch, data);
    })
    .catch(err => console.log(err));
};
