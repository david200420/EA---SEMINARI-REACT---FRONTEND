import api from '../../api';
import type { Event } from '../../modules/event';

export const getEvents = async (): Promise<Event[]> => {
  const res = await api.get('/event');
  return res.data;
};



