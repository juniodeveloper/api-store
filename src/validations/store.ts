import * as yup from 'yup'

export const uploadValidation = yup.object().shape(
  {
    title: yup.string().max(60),
    category: yup.string().max(60),
    description: yup.string().min(100).max(500),
    short_description: yup.string().max(100),
    prints: yup.array().required().max(6)
  }
)
