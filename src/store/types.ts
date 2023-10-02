import { UserProps } from '@app-types/user';

export type AppContextSessionProps = {
  user: UserProps | null;
};

export type UserProviderProps = {
  children: React.ReactNode;
  session?: AppContextSessionProps;
};

export type UserContextProps = {
  user: UserProps | null;
  setUser: (user: UserProps | null) => void;
};
