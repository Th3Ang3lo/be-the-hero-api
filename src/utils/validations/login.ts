import * as yup from 'yup'

export const loginValidator = yup.object({
  email: yup.string().email('E-mail inválido').max(255, 'Máximo de 255 caracteres').required('O campo email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('O campo senha é obrigatório')
})
