import { supabase } from '../supabaseClient';

export const fetchEntities = async () => {
  const { data, error } = await supabase
    .from('entities')
    .select('*');

  if (error) {
    console.error('Error fetching entities:', error);
    return [];
  }

  return data;
};
