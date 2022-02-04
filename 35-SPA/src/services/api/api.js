import createInstance from '../instance';
import { dataResponse } from './utils/commentsData';

const API = createInstance();

const getComments = async () => {
  const response = await API.get('/comments');
  return dataResponse(response);
};

export default getComments;
