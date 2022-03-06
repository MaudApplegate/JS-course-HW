import createInstance from '../instance';
import { pokemonName, pokemonImage } from '../utils/utils';

const API = createInstance();

export const getList = async () => {
  const response = await API.get('?offset=00&limit=20');
  return response.data.results;
};
