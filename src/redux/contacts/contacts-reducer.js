import { addContact, deleteContact } from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsReducer = createReducer([], builder => {
  builder
    .addCase(addContact, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(deleteContact, (state, { payload }) => {
      return state.filter(item => item.id !== payload);
    });
});

export default contactsReducer;
