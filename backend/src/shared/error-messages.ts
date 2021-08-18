export default {
  // general error 1 - 20 messageCode
  NUMBER_IS_REQUIRED: {
    messageCode: 1,
    text: 'Number is required',
  },
  NUMBER_IS_EMPTY: {
    messageCode: 2,
    text: 'Value should not be empty',
  },
  SERVER_ERROR: {
    messageCode: 3,
    text: 'Server error',
  },
  SHOULD_BE_NUMBER: (valueName: string) => ({
    messageCode: 4,
    text: `${valueName} should be a number`,
  }),
  SHOULD_BE_POSITIVE_NUMBER: (valueName: string) => ({
    messageCode: 5,
    text: `${valueName} should be a positive number`,
  }),
};
