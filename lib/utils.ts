export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};
// In essence, this function is a tool to quickly check if a value is a valid string according to specific criteria. It can be used to ensure that strings are within a certain length and not empty or of an unexpected type.

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

// In summary, this function is a utility for extracting meaningful error messages from various types of errors. It checks if the error is an an instance of the 'Error' class an object with a 'message' property, a string, or something else, and returns an appropriate error message. If no recognizable error is provided, it defaults to the message "Something went wrong".
