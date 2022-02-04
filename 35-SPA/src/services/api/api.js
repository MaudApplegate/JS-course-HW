import createInstance from '../instance';
import { dataResponse } from './utils/commentsData';

const API = createInstance();

export const getComments = async () => {
  const response = await API.get('/comments');
  return dataResponse(response);
};

export const getSingleComment = async (id) => {
  const response = await API.get(`/comments/${id}`);
  return response;
};
