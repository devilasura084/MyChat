

export interface Message {
  name: string;
  message: string;
  date: Date;
  edited: boolean;
  deleted: boolean;
}

export interface ContactType {
  email: string;
  name: string;
  imageUrl: string;
  messages: Message[];
}

export interface UserDetailType {
  email: string;
  name: string;
  imageUrl: string;
  contactlist: ContactType[];
}

export interface RootState {
  user: UserDetailType;
}