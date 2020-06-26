import React from 'react'; 
import { AuthContext } from '../../contexts/auth';


export default function Login(){

    //static contextType = AuthContext;
    const authContext = AuthContext;
    //Handle Submission
    handleSubmit = (event => {
        //prevent the default
        event.preventDefault();

        const {username, password} = event.target.elements;
    })
    return(
        <form onSubmit={this.handleSubmit}>
        <input placeholder="Username" name="username" />
        <input placeholder="Password" type="password" name="password" />
        <button>Login</button>
      </form>
    )
    

}