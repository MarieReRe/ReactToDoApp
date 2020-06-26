import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Login from '../../auth/login';

class index extends Component {
    render() {
        return (
           <header>
                  <nav>
                <ul>
               <li><Link to="/">Home</Link></li>
           </ul>
            </nav>
            <Login/>
           </header>
        );
    }
}

export default index;