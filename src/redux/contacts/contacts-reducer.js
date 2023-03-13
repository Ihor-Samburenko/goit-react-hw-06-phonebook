import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

const initialState = [];

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default contactsReducer;
