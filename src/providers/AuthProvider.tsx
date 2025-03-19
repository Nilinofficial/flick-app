import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useProfile } from "../queries/useProfile";
import { UserProfileProps } from "../types";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  isLoading: boolean;
  isFetching: boolean;
  userDetails: UserProfileProps;
  setUser: (user: UserProfileProps) => void;
}

const initialUserState = {
  firstName: "",
  lastName: "",
  email: "",
  isVerified: false,
  userId: "",
  profilePicUrl: "",
};

const initialValue: AuthContextProps = {
  token: null,
  setToken: () => {},
  isLoading: true,
  isFetching: false,
  userDetails: initialUserState,
  setUser: () => {},
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
  const { data: userDetails, isFetching } = useProfile();
  const [user, setUser] = useState(initialUserState);

  const validUser = async () => {
    const authtoken = await AsyncStorage.getItem("@token");
    setToken(authtoken);
    if (!authtoken) {
      setIsLoading(false);
      return;
    }
    if (userDetails?.data) {
      setUser(userDetails.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    validUser();
  }, [userDetails]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isLoading,
        isFetching,
        userDetails: user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
