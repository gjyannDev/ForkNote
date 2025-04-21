export function handleError(error, functionName) {
  console.error(`Error in ${functionName}:`, error.message || error);
}