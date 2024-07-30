// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDetailType, contacttype } from '../types/types';

const initialState: UserDetailType = {
  email: '',
  name: '',
  imageUrl: '',
  contactlist: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserDetailType>) => {
      return { ...state, ...action.payload };
    },
    updateImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    addContact: (state, action: PayloadAction<contacttype>) => {
      state.contactlist.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contactlist = state.contactlist.filter(contact => contact.email !== action.payload);
    },
    updateContact: (state, action: PayloadAction<contacttype>) => {
      const index = state.contactlist.findIndex(contact => contact.email === action.payload.email);
      if (index !== -1) {
        state.contactlist[index] = action.payload;
      }
    },
    clearUserDetails: () => initialState,
  },
});

export const { 
  setUserDetails, 
  updateImageUrl, 
  addContact, 
  removeContact, 
  updateContact, 
  clearUserDetails 
} = userSlice.actions;

export default userSlice.reducer;