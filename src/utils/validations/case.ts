import * as yup from 'yup'

export const caseValidator = yup.object({
  title: yup.string().max(255, 'Máximo de 255 caracteres').required('O campo email é obrigatório'),
  description: yup.string().required('O campo descrição é obrigatório'),
  amount: yup.number().required('O campo quantidade é obrigatório')
})
