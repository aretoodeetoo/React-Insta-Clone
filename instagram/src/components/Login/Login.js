import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div  className="loginPage">
            <div>
            <h2>Welcome to InstaCram!</h2>
            <h3>Social Media for Students Who Actually Want to Study</h3>
            <form action="/action_page.php">
            <div>
                <h2>Log In With Existing Accounts or With InstaCram</h2>
            </div>
            <div className="socialMedias">
            <a href="#">
            <i class="fas fa-graduation-cap"></i> Log In With School Account
            </a>
            <a href="#">
            <i class="fa fa-facebook fa-fw"></i> Log In With Facebook
            </a>
            <a href="#">
            <i class="fa fa-google fa-fw"></i> Log In With Google Account
            </a>
            </div>
            <div className="loginInput">
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" name="submitButton" placeholder="Log In" />
            </div>
            </form>
            </div>

            <div className="loginBottom">
            <div className="alternateForms">
            <button className="accountCreate">Create Account</button>
            <button className="forgotPass">Forgot Password?</button>
            </div>
            </div>
        </div>
        );
    }
}

export default Login;