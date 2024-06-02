const createCarValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
    isString: {
      errorMessage: 'Name must be a string',
    },
  },
  rent_per_day: {
    notEmpty: {
      errorMessage: 'Rent per day cannot be empty',
    },
    isNumeric: {
      errorMessage: 'Rent per day must be a number',
    },
  },
  size_id: {
    notEmpty: {
      errorMessage: 'Size ID cannot be empty',
    },
    isNumeric: {
      errorMessage: 'Size ID must be a number',
    },
  },
  start_rent: {
    optional: true,
    isISO8601: {
      errorMessage: 'Start rent must be a date',
    },
  },
  finish_rent: {
    optional: true,
    isISO8601: {
      errorMessage: 'Finish rent must be a date',
    },
  },
}

const updateCarValidationSchema = {
  name: {
    optional: true,
    isString: {
      errorMessage: 'Name must be a string',
    },
  },
  rent_per_day: {
    optional: true,
    isNumeric: {
      errorMessage: 'Rent per day must be a number',
    },
  },
  size_id: {
    optional: true,
    isNumeric: {
      errorMessage: 'Size ID must be a number',
    },
  },
  start_rent: {
    optional: true,
    isISO8601: {
      errorMessage: 'Start rent must be a date',
    },
  },
  finish_rent: {
    optional: true,
    isISO8601: {
      errorMessage: 'Finish rent must be a date',
    },
  },
}

export {
  createCarValidationSchema,
  updateCarValidationSchema
}