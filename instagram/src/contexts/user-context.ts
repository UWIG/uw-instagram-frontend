import { createContext } from 'react';
import { UserContextType } from './context-type';

const defaultState = {
    username: "",
    avatar:"",
    fullname:"",
    setUser: () => {},
  };

const UserContext = createContext<UserContextType>(defaultState);
export default UserContext;