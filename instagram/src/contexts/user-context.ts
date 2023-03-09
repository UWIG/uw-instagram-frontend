import { createContext } from 'react';
import { UserContextType } from './context-type';

const defaultState = {
    username: "",
    setUsername: (username: string) => {},
  };

const UserContext = createContext<UserContextType>(defaultState);
export default UserContext;