import {
  POKE_REQUEST,
  POKE_INFO_REQUEST,
  POKE_REQUEST_LOADING,
  FIND_POKE_NAME,
} from "../constants";
import { combineReducers } from "redux";

const pokeList = (state = { list: [], loading: false }, action) => {
  let newState = Object.assign({}, state);
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
    case FIND_POKE_NAME:
      const { text } = action;
      if (text) {
        newState.filteredList = [
          ...state.list.filter((item) => item.name.includes(action.text)),
        ];
      } else {
        newState.filteredList = newState.list;
      }
      return newState;
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
