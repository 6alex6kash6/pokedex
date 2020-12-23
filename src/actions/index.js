import { POKE_REQUEST, API_BASE, POKE_INFO_REQUEST } from "../constants";

const fetchData = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const normalizeInfo = (info) => {
  return {
    id: info.id,
    abilities: info.abilities.map((item) => item.ability.name),
    height: info.height,
    name: info.name,
    avatar: info.sprites.front_default,
    type: info.types.map((item) => item.type.name),
    stats: info.stats.map((item) => ({
      value: item.base_stat,
      statName: item.stat.name,
    })),
  };
};

const loadPokemons = (list) => ({
  type: POKE_REQUEST,
  list: list.map((item) => item),
});

export const fetchPokemons = () => async (dispatch) => {
  const list = await fetchData(API_BASE);
  dispatch(loadPokemons(list.results));
};

const loadPokemonInfo = (info) => ({
  type: POKE_INFO_REQUEST,
  info,
  infoRequested: true,
});

export const fetchPokemonInfo = (url) => async (dispatch) => {
  const info = await fetchData(url);
  const normalizedInfo = normalizeInfo(info);
  dispatch(loadPokemonInfo(normalizedInfo));
};
