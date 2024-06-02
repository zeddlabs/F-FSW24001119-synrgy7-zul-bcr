const createUserValidationSchema = {
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
  role: {
    notEmpty: {
      errorMessage: 'Role cannot be empty',
    },
    isString: {
      errorMessage: 'Role must be a string',
    },
  },
}

const updateUserValidationSchema = {
  name: {
    optional: true,
    isString: {
      errorMessage: 'Name must be a string',
    },
  },
  email: {
    optional: true,
    isEmail: {
      errorMessage: 'Email must be a valid email',
    },
  },
  password: {
    optional: true,
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
  role: {
    optional: true,
    isString: {
      errorMessage: 'Role must be a string',
    },
  },
}

export {
  createUserValidationSchema,
  updateUserValidationSchema,
}