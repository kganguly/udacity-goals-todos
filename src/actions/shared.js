import API from 'goals-todos-api';

// CONSTS
export const RECEIVE_DATA = 'RECEIVE_DATA';

// ACTION CREATORS
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}

// THUNKS
export function handleInitialData() {
  return dispatch => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals(),
    ]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  };
}