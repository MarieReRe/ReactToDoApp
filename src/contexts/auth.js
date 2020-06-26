import React from 'react';

export const AuthContext = React.createContext();

export default function useAuth() {
    return useContext(AuthContext);
  }


  export class AuthProvider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        user: null,
      };
    }
  