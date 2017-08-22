import {
  GET_DEPUTIES,
  GET_DEPUTIES_SUCCESS,
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
    default:
      return state;
  }
};
