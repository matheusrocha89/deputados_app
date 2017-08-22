import {
  GET_DEPUTIES,
  GET_DEPUTIES_SUCCESS,
} from '../types';

import apiClient from '../../clients/api';


const getDeputiesSuccess = (dispatch, listOfDeputies) => {
  dispatch({
    type: GET_DEPUTIES_SUCCESS,
    payload: listOfDeputies,
  });
};

export const getDeputies = () => (dispatch) => {
  dispatch({ type: GET_DEPUTIES });
  apiClient.get('/deputados')
    .then(({ data }) => {
      const { dados } = data;
      getDeputiesSuccess(dispatch, dados);
    })
    .catch(err => console.log(err));
};
