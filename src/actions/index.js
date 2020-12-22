import { POKE_REQUEST, API_BASE } from "../constants";

const loadPokemons = (list) => ({
  type: POKE_REQUEST,
  list: list.map((item) => item.name),
  urls: list.map((item) => item.url),
});

export const fetchPokemons = () => async (dispatch) => {
  const res = await fetch(API_BASE);
  const list = await res.json();
  dispatch(loadPokemons(list.results));
};

const loadPokemonsInfo = (url) => {};

export const fetchPokemonsInfo = (url) => async (dispatch) => {
  dispatch(loadPokemonsInfo(url));
};
