import React from 'react';
import useAuth from '../contexts/auth';


export default function Login(props) {

    //static contextType = AuthContext;
    const context = useAuth();
    //Handle Submission
    const handleSubmit = (event) => {
        //prevent the default
        event.preventDefault();

        const { username, password } = event.target.elements;
        context.login(username.value, password.value);
    }
    // const { user } = this.context;
    // if (user) {
    //     return (
    //         <h1>
    //             Welcome back, {user.username}!
    //         </h1>
    //     );
    // }
    return (
        <form onSubmit={handleSubmit}>
          <input placeholder="Username" name={props.username} />
          <input placeholder="Password" type="password" name={props.password} />
          <button>Log In</button>
        </form>
      )


}