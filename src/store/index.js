import {
  POKE_REQUEST,
  POKE_INFO_REQUEST,
  POKE_REQUEST_LOADING,
} from "../constants";
import { combineReducers } from "redux";

const pokeList = (state = { list: [], loading: false }, action) => {
  switch (action.type) {
    case POKE_REQUEST:
      return {
        ...state,
        list: [...state.list.concat(action.list)],
      };
    case POKE_REQUEST_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return { ...state };
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
