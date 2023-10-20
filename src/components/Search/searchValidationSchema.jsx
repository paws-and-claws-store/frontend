import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  query: yup.string().min(3).max(255).trim(),
});
