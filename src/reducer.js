import {List, Map, fromJS} from 'immutable';

// this is the reducer function that is used by the redux store
export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'VOTE':
      return vote(state, action.entry);
    case 'NEXT':
      return state.remove('hasVoted');
  }
  return state;
}


function setState(state, newState) {
  if (newState.reset) {
    state = fromJS(newState).remove('reset');
  } else {
    state = state.merge(newState);
  }
  console.log(2, 'low reducer setState()', state.toJS());
  return state;
}

function vote(state, entry) {
  state = resetVote(state);
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    state = state.set('hasVoted', entry);
    console.log(1, 'low reducer vote()', state.toJS());
    return state;
  } else {
    return state;
  }
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  } else {
    return state;
  }
}

