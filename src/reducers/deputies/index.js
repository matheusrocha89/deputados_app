import {
  GET_DEPUTIES,
  GET_DEPUTIES_SUCCESS,
} from '../../actions/types';


const INITIAL_STATE = {
  listOfDeputies: [],
  currentDeputy: {},
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DEPUTIES_SUCCESS:
      return { ...state, listOfDeputies: action.payload };
    default:
      return state;
  }
};
