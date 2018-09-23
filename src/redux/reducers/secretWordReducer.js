import { actionTypes } from "../actions";


/**
 * @function secretWordReducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function secretWordReducer(state = null, action) {
  switch ( action.type ) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;

    default:
      return state;
  }
}