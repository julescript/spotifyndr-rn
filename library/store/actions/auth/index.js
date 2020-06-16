export const ADD_AUTH = 'ADD_AUTH';
export const DELETE_AUTH = 'DELETE_AUTH';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const addToken = (token, time) => {
      return { type: ADD_AUTH, token: token, time: time };
};