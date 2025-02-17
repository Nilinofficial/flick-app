import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  isLoading: boolean;
}

const initialValue: AuthContextProps = {
  token: null,
  setToken: () => {},
  isLoading: true,
};

const AuthContext = createContext<AuthContextProps>(initialValue);

export const useAuthSession = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const validUser = async () => {
    const authtoken = await AsyncStorage.getItem("@token");
    setToken(authtoken);
    setIsLoading(false);
  };

  useEffect(() => {
    validUser();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
