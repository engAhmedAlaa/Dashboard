import { ReactNode, createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/authentication';
import Loading from '../components/loading-component/LoadingComponent';

type UserType = User | null;

type StateType = {
  user: UserType;
  updateUser: () => void;
};

const initialState = {
  user: null,
  updateUser: () => {},
};

export const AuthContext = createContext<StateType>(initialState);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType>(null);
  const [, update] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  function updateUser() {
    update({});
  }

  const value = {
    user,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <Loading initial /> : children}
    </AuthContext.Provider>
  );
}
