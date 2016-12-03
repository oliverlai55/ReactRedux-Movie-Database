

const logger = store => next => action => {
  console.group(action.type);
  console.log('%c' + 'action:', 'color: blue', action)
  const result = next(action);
  console.log('%c' + 'next state:', 'color: red', store.getState());
  console.groupEnd(action.type);
  return result;
}


export default logger
