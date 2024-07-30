// src/types/types.ts
export interface UserDetailType {
    email: string;
    name: string;
    imageUrl: string;
    contactlist: string[];
  }
  
  export interface RootState {
    user: UserDetailType;
  }