import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class index extends Component {
    render() {
        return (
           <header>
                  <nav>
                <ul>
               <li><Link to="/">Home</Link></li>
           </ul>
            </nav>
           </header>
        );
    }
}

export default index;