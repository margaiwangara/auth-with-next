'use client';

import { createContext, useContext, useState } from 'react';

import { UserProps } from '@app-types/user';

import { UserContextProps, UserProviderProps } from '../types';

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

export function UserProvider({ children, session }: UserProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);

  return (
    <UserContext.Provider value={{ user: session?.user || user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
