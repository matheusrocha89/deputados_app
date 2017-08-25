import {
  GET_DEPUTIES,
  GET_DEPUTIES_SUCCESS,
  GET_MORE_DEPUTIES,
  GET_MORE_DEPUTIES_SUCCESS,
  GET_DEPUTY_DETAILS,
  GET_DEPUTY_DETAILS_SUCCESS,
} from '../types';
import { API_BASE_URL } from '../../config';

import apiClient from '../../clients/api';


const mapLinksToPaginationObject = (links) => {
  const pagination = {};
  links.forEach((link) => {
    pagination[link.rel] = link.href.replace(API_BASE_URL, '/');
  });
  return pagination;
};

const getDeputiesSuccess = (dispatch, data, type) => {
  const pagination = mapLinksToPaginationObject(data.links);
  dispatch({
    type,
    payload: {
      listOfDeputies: data.dados,
      pagination,
    },
  });
};

export const getMoreDeputies = url => (dispatch) => {
  dispatch({ type: GET_MORE_DEPUTIES });
  apiClient.get(url)
    .then(({ data }) => {
      getDeputiesSuccess(dispatch, data, GET_MORE_DEPUTIES_SUCCESS);
    })
    .catch(err => console.log(err));
};

export const getDeputies = () => (dispatch) => {
  dispatch({ type: GET_DEPUTIES });
  apiClient.get('/deputados?itens=25')
    .then(({ data }) => {
      getDeputiesSuccess(dispatch, data, GET_DEPUTIES_SUCCESS);
    })
    .catch(err => console.log(err));
};

export function getDeputyDetails(id) {
  return (dispatch, getState) => {
    dispatch({ type: GET_DEPUTY_DETAILS });
    const { deputies: { currentDeputy } } = getState();

    if (id === currentDeputy.id) {
      dispatch({
        type: GET_DEPUTY_DETAILS_SUCCESS,
        payload: currentDeputy,
      });
    } else {
      apiClient.get(`/deputados/${id}`)
        .then(({ data }) => {
          dispatch({
            type: GET_DEPUTY_DETAILS_SUCCESS,
            payload: data.dados,
          });
        })
        .catch(err => console.log(err));
    }
  };
}
