/*
 this is a redux middleware function that gets invoked when
 an action is dispatched but before it hits the reducer and store.
 action-creator > middleware > reducer

 'action' is the object from the action_creator i.e.
 {
  type : 'VOTE',
  entry : 'Some Film name'
 }
*/

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    console.log(5, 'low socket.emit.action', action);
    socket.emit('action', action);
  }
  return next(action);
}