import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  query: yup.string().min(3, 'Занадто короткий запит').max(255, 'Занадто довгий запит').trim(),
});
