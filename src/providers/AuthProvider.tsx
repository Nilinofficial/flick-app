import {
    createContext,
    MutableRefObject,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { router } from "expo-router";
  interface AuthContextProps {
    // signIn: (args: string) => void;
    signOut: () => void;
    token: MutableRefObject<string | null> | null;
    isLoading: boolean;
  }
  
  const AuthContext = createContext<AuthContextProps>({
    // signIn: () => null,
    signOut: () => null,
    token: null,
    isLoading: true,
  });
  
  export function useAuthSession() {
    return useContext(AuthContext);
  }
  
  export default function AuthProvider({ children }: { children: ReactNode }) {
    const tokenRef = useRef<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const validUser = async (): Promise<void> => {
      const token = await AsyncStorage.getItem("@token");
      tokenRef.current = token || null;
      setIsLoading(false);
    };
  
    useEffect(() => {
      validUser();
    }, []);
  
    // const signIn = useCallback(async (token: string) => {
    //   await AsyncStorage.setItem("@token", token);
    //   tokenRef.current = token;
    //   router.replace("/");
    // }, []);
  
    const signOut = useCallback(async () => {
      await AsyncStorage.setItem("@token", "");
      tokenRef.current = null;
      router.replace("/login");
    }, []);
  
    return (
      <AuthContext.Provider
        value={{
          // signIn,
          signOut,
          token: tokenRef,
          isLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  