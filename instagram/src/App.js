import React, { Component } from 'react';
import './App.css';

// Import App body
import PostsPage from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/PostContainer/PostsPage.js';
import authenticate from './components/Authenticate/Authenticate';
import Login from './components/Login/Login';

// Import HOC
// import authenticate from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/Authenticate/Authenticate.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
      <Login />
      </div>
    );
  }
}

export default App;