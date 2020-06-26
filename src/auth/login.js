import React from 'react'; 
import useAuth from '../contexts/auth';


export default function Login(){

    //static contextType = AuthContext;
    const authContext = useAuth();
    //Handle Submission
    handleSubmit = (event => {
        //prevent the default
        event.preventDefault();

        const {username, password} = event.target.elements;
        this.context.login(username.value, password.value);
    })
    return(
        <form onSubmit={this.handleSubmit}>
        <input placeholder="Username" name="username" />
        <input placeholder="Password" type="password" name="password" />
        <button>Login</button>
      </form>
    )
    

}