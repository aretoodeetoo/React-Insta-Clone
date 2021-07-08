import React, { Component } from 'react';
import './App.css';

// Import App body
import PostsPage from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostsPage.js';
import Login from './components/Login/Login';

// Import HOC
import authenticate from './components/Authenticate/authenticate.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
      <ConditionalRender />
      </div>
    );
  }
}

// const Conditional = authenticate(App)(Login);
// console.log(Conditional);

const ConditionalRender = authenticate(PostsPage)(Login);

export default App;