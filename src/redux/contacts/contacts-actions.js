import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      id: nanoid(),
      ...data,
    },
  };
});
export const deleteContact = createAction('contacts/delete');

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// export const deleteContact = payload => {
//   return {
//     type: DELETE_CONTACT,
//     payload,
//   };
// };
