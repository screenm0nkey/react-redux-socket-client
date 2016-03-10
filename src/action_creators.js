// this has a local reducer
export function setState(state) {
  console.log(4, 'low actionCreator setState()', state)
  return {
    type: 'SET_STATE',
    state
  };
}

// this has a local reducer and is sent to server
export function vote(entry) {
  console.log(3, 'low actionCreator vote()', entry);
  return {
    meta: {remote: true},
    type: 'VOTE',
    entry
  };
}

// sent to socket server
export function next() {
  console.log(3, 'low actionCreator next()');
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
}

// sent to socket server
export function reset() {
  console.log(3, 'low actionCreator reset()');
  return {
    meta: {remote: true},
    type: 'RESET'
  };
}