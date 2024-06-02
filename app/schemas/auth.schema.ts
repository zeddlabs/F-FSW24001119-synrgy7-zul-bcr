const signInValidationSchema = {
  email: {
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
    isEmail: {
      errorMessage: 'Email must be a valid email',
    },
  },
  password: {
    notEmpty: {
      errorMessage: 'Password cannot be empty',
    },
    isString: {
      errorMessage: 'Password must be a string',
    },
  },
}

const signUpValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
    isString: {
      errorMessage: 'Name must be a string',
    },
  },
  email: {
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
    isEmail: {
      errorMessage: 'Email must be a valid email',
    },
  },
  password: {
    notEmpty: {
      errorMessage: 'Password cannot be empty',
    },
    isLength: {
      options: {
        min: 8,
      },
      errorMessage: 'Password must be at least 8 characters long',
    },
    isString: {
      errorMessage: 'Password must be a string',
    },
  },
}

export {
  signInValidationSchema,
  signUpValidationSchema,
}