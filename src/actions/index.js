import {
  POKE_REQUEST,
  API_BASE,
  POKE_INFO_REQUEST,
  POKE_REQUEST_LOADING,
  FIND_POKE_NAME,
} from "../constants";

const fetchData = async (url, dispatch) => {
  const res = await fetch(url);
  if (res.ok) {
    dispatch(loadingState(false));
  }
  return res.json();
};

const defineStatPower = (statValue) => {
  if (statValue <= 30) {
    return "weak";
  }
  if (30 < statValue && statValue <= 60) {
    return "mid";
  }
  if (60 < statValue && statValue <= 100) {
    return "strong";
  }
  if (statValue > 100) {
    return "mega";
  }
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
      statPower: defineStatPower(item.base_stat),
    })),
  };
};

const loadPokemons = (list) => ({
  type: POKE_REQUEST,
  list: list.map((item) => item),
});

const loadingState = (bool) => ({
  type: POKE_REQUEST_LOADING,
  loading: bool,
});

export const fetchPokemons = (offset) => async (dispatch) => {
  dispatch(loadingState(true));
  setTimeout(async () => {
    const list = await fetchData(`${API_BASE}${offset}`, dispatch);
    dispatch(loadPokemons(list.results));
  }, 300);
};

const loadPokemonInfo = (info) => ({
  type: POKE_INFO_REQUEST,
  info,
  infoRequested: true,
});

export const fetchPokemonInfo = (url) => async (dispatch) => {
  const info = await fetchData(url, dispatch);
  const normalizedInfo = normalizeInfo(info);
  dispatch(loadPokemonInfo(normalizedInfo));
};

export const findPokeByName = (text) => ({
  type: FIND_POKE_NAME,
  text,
});
