import createInstance from '../instance';
import { pokemonName, pokemonImage, pokemonDetails } from '../utils/utils';

const API = createInstance();

export const getList = async () => {
  const response = await API.get('?offset=00&limit=20');
  return response.data.results;
};

export const getImage = async (url) => {
  const response = await API.get(url);
  return pokemonImage(response);
};

export const getDetails = async (id) => {
  const response = await API.get(`/${id}/`);
  return pokemonDetails(response);
};