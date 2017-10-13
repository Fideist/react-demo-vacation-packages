import axios from 'axios';

const GET_VACATIONS = 'GET_VACATIONS';
const CREATE_VACATION = 'CREATE_VACATION';
const DELETE_VACATION = 'DELETE_VACATION';

let initialState = {
  data: [],
  fetching: false,
  errorMessage: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VACATIONS + '_PENDING':
      return Object.assign({}, state, { fetching: true });
    case GET_VACATIONS + '_FULFILLED':
      return Object.assign({}, state, { data: action.payload.data, fetching: false });
    case GET_VACATIONS + '_REJECTED':
      return Object.assign({}, state, { data: [], fetching: false, errorMessage: action.payload });

    case CREATE_VACATION + '_PENDING':
      return Object.assign({}, state, { fetching: true });
    case CREATE_VACATION + '_FULFILLED':
      return Object.assign({}, state, { data: action.payload.data, fetching: false });
    case CREATE_VACATION + '_REJECTED':
      return Object.assign({}, state, { data: [], fetching: false, errorMessage: action.payload });

    case DELETE_VACATION + '_PENDING':
      return Object.assign({}, state, { fetching: true });
    case DELETE_VACATION + '_FULFILLED':
      return Object.assign({}, state, { data: action.payload.data, fetching: false });
    case DELETE_VACATION + '_REJECTED':
      return Object.assign({}, state, { data: [], fetching: false, errorMessage: action.payload });
    default:
      return state;
  }
}

export function getVacations() {
  return {
    type: GET_VACATIONS,
    payload: axios.get('http://localhost:8777/vacations')
  }
}

export function createVacation(newVacation) {
  return {
    type: CREATE_VACATION,
    payload: axios.post('http://localhost:8777/vacations', newVacation)
  }
}

export function deleteVacation(id) {
  return {
    type: DELETE_VACATION,
    payload: axios.delete(`http://localhost:8777/vacations/${id}`)
  }
}
