// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDetailType, ContactType, Message } from '../types/types';

const initialState: UserDetailType = {
  email: '',
  name: '',
  imageUrl: 'https://via.placeholder.com/50',
  backgroundcolor:'ffffff',
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
    addContact: (state, action: PayloadAction<ContactType>) => {
      if(!state.contactlist.some(contact => contact.email === action.payload.email)){
      state.contactlist.push({
        ...action.payload,
        imageUrl: action.payload.imageUrl || 'https://via.placeholder.com/50',
        backgroundcolor:action.payload.backgroundcolor||'ffffff',
        messages: [],
      });}
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contactlist = state.contactlist.filter(contact => contact.email !== action.payload);
    },
    updateContact: (state, action: PayloadAction<ContactType>) => {
      const index = state.contactlist.findIndex(contact => contact.email === action.payload.email);
      if (index !== -1) {
        state.contactlist[index] = {
          ...state.contactlist[index],
          ...action.payload,
        };
      }
    },
    addMessage: (state, action: PayloadAction<{ contactEmail: string; message: Message }>) => {
      const contact = state.contactlist.find(c => c.email === action.payload.contactEmail);
      if (contact) {
        contact.messages.push({...action.payload.message,seen:false});
      }
    },
    updateMessage: (state, action: PayloadAction<{ contactEmail: string; messageIndex: number; message: Partial<Message> }>) => {
      const contact = state.contactlist.find(c => c.email === action.payload.contactEmail);
      if (contact && contact.messages[action.payload.messageIndex]) {
        contact.messages[action.payload.messageIndex] = {
          ...contact.messages[action.payload.messageIndex],
          ...action.payload.message,
        };
      }
    },
    deleteMessage: (state, action: PayloadAction<{ contactEmail: string; messageIndex: number }>) => {
      const contact = state.contactlist.find(c => c.email === action.payload.contactEmail);
      if (contact && contact.messages[action.payload.messageIndex]) {
        contact.messages[action.payload.messageIndex].deleted = true;
      }
    },
    markMessagesSeen: (state, action: PayloadAction<string>) => {
      const contact = state.contactlist.find(c => c.email === action.payload);
      if (contact) {
        contact.messages.forEach(message => {
          message.seen = true;
        });
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
  addMessage,
  updateMessage,
  deleteMessage,
  clearUserDetails,
  markMessagesSeen
} = userSlice.actions;

export default userSlice.reducer;