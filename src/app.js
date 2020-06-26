import React from 'react';
import Header from './components/header';
import ToDo from './components/todo/todo.js';
import './index.css'

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
        <ToDo />
      </>
    );
  }
}
