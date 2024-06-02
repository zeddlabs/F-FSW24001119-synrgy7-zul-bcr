const createSizeValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
    isString: {
      errorMessage: 'Name must be a string',
    },
  }
}

const updateSizeValidationSchema = createSizeValidationSchema

export { 
  createSizeValidationSchema, 
  updateSizeValidationSchema 
}