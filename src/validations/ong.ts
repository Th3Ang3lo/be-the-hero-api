import * as yup from 'yup'

export const ongValidator = yup.object({
  ong: yup.string().max(255, 'Máximo de 255 caracteres').required('O campo ong é obrigatório'),
  email: yup.string().email('E-mail inválido').max(255, 'Máximo de 255 caracteres').required('O campo email é obrigatório'),
  phone: yup.string().max(255, 'Máximo de 255 caracteres').required('O campo telefone é obrigatório'),
  city: yup.string().max(255, 'Máximo de 255 caracteres').required('O campo cidade é obrigatório'),
  state: yup.string().max(255, 'Máximo de 255 caracteres').required('O campo estado é obrigatório')
})
