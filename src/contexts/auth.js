import React from 'react';

export const AuthContext = React.createContext();

export default function useAuth() {
    return useContext(AuthContext);
  }
  