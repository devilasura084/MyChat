

export interface Message {
  email: string;
  message: string;
  date: string;
  edited: boolean;
  deleted: boolean;
}

export interface ContactType {
  email: string;
  name: string;
  imageUrl: string;
  backgroundcolor:string;
  messages: Message[];
}

export interface UserDetailType {
  email: string;
  name: string;
  imageUrl: string;
  backgroundcolor:string;
  contactlist: ContactType[];
}

export interface RootState {
  user: UserDetailType;
}