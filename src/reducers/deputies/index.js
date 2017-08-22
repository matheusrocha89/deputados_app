import {
  GET_DEPUTIES,
  GET_DEPUTIES_SUCCESS,
  GET_MORE_DEPUTIES_SUCCESS,
} from '../../actions/types';


const INITIAL_STATE = {
  listOfDeputies: [],
  pagination: [],
  currentDeputy: {},
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DEPUTIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_MORE_DEPUTIES_SUCCESS:
      return {
        ...state,
        listOfDeputies: [...state.listOfDeputies, ...action.payload.listOfDeputies],
        pagination: action.payload.pagination,
      }
    default:
      return state;
  }
};
