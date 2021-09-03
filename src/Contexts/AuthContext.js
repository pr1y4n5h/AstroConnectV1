import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  user: {
    _id: "61304e820abddf3713ad0013",
    username: "preeti",
    email: "preeti@email.com",
    followers: ["613050260abddf3713ad001b", "61304dc50abddf3713ad000c"],
    followings: ["61304dc50abddf3713ad000c", "613050260abddf3713ad001b"],
    isAdmin: false,
  },
  loader: false,
};

export function AuthProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <AuthContext.Provider value={{ ...state, setState }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
