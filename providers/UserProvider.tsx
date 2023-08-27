'use client';

import { MyUserContextProvider } from '@/hooks/useUser';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FunctionComponent<UserProviderProps> = ({
  children,
}) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
