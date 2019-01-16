import React from 'react';
import App from '../../App';
import Login from '/Users/Don/Git/React-Insta-Clone/instagram/src/components/Login/Login.js';

const authenticate = App => Login => 
class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount(){
        localStorage.getItem('username');
        localStorage.getItem('password');
    }    

    render(){
        // if (!loggedIn)
       return <App />
       // else
       return <Login />
        }
    }

export default authenticate;