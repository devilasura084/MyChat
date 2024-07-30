// src/types/types.ts
export interface UserDetailType {
    email: string;
    name: string;
    imageUrl: string;
    contactlist: contacttype[];
  }
export interface contacttype{
    email: string;
    name: string;
    imageUrl: string;
}
  export interface RootState {
    user: UserDetailType;
  }