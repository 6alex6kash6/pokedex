import { POKE_REQUEST } from "../constants";

export const reducer = (state = { list: [], urls: [] }, action) => {
  switch (action.type) {
    case POKE_REQUEST:
      return {
        ...state,
        list: action.list,
        urls: action.urls,
      };
    default:
      return state;
  }
};
