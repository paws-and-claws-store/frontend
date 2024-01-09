import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  query: yup
    .string()
    .max(55, 'Занадто довгий запит')
    .trim()
    .test(
      'len',
      'Будь ласка, введіть свій запит',
      val => val.toString().length !== 0,
    )
    .test(
      'len',
      'Занадто короткий запит',
      val => val.toString().length !== 1 && val.toString().length !== 2,
    ),
});
