import {
  POKE_REQUEST,
  POKE_INFO_REQUEST,
  POKE_REQUEST_LOADING,
  FIND_POKE_NAME,
  FIND_POKE_TYPE,
} from "../constants";
import { combineReducers } from "redux";

const pokeList = (
  state = { list: [], loading: false, isFilterApply: false },
  action
) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case POKE_REQUEST:
      return {
        ...state,
        list: [...state.list.concat(action.list)],
        filteredList: [...state.list.concat(action.list)],
      };
    case POKE_REQUEST_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case FIND_POKE_NAME:
      const { text, isFilterApply } = action;
      if (text) {
        newState.isFilterApply = isFilterApply;
        newState.filteredList = [
          ...state.list.filter((item) => item.name.includes(text)),
        ];
      } else {
        newState.filteredList = newState.list;
        newState.isFilterApply = false;
      }
      return newState;

    case FIND_POKE_TYPE:
      const pokeType = action.pokeType.toLowerCase();
      if (pokeType === "all") {
        newState.isFilterApply = false;
        newState.filteredList = newState.list;
      } else {
        newState.isFilterApply = action.isFilterApply;
        newState.filteredList = [
          ...state.list.filter((item) => item.type.includes(pokeType)),
        ];
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
