import { POKE_REQUEST, POKE_INFO_REQUEST } from "../constants";
import { combineReducers } from "redux";

const pokeList = (state = { list: [] }, action) => {
  switch (action.type) {
    case POKE_REQUEST:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

const pokeInfo = (state = { infoRequested: false }, action) => {
  switch (action.type) {
    case POKE_INFO_REQUEST:
      return {
        ...state,
        ...action.info,
        infoRequested: action.infoRequested,
      };
    default:
      return {
        ...state,
      };
  }
};

export const rootReducer = combineReducers({
  pokeList,
  pokeInfo,
});
