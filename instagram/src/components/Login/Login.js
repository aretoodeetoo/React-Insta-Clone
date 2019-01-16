import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    onLogin = ev => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
    }

    render(){
        return (
        <div className="loginPage">
            <div className="pageWrapper">
                <div className="loginTitle">
            <h2>Welcome to InstaCram!</h2>
            <h4>Social Media for Students Who Actually Want to Study</h4>
            </div>
            <form action="/action_page.php">
            <div className="loginSubtitle">
                <h5>Log In With Existing Accounts or With InstaCram</h5>
            </div>
            <div className="loginWrapper">
            <div className="socialMedias">
            <a href="#">
            <i className="fas fa-graduation-cap"></i><span className="loginAlternates"> Log In With School Account</span>
            </a>
            <a href="#">
            <i className="fab fa-facebook"></i><span className="loginAlternates"> Log In With Facebook </span>
            </a>
            <a href="#">
            <i className="fab fa-google"></i><span className="loginAlternates"> Log In With Google Account </span>
            </a>
            </div>
            <div className="loginInput">
                <input 
                type="text" 
                onSubmit={this.addNewUser}
                onChange={this.handleChanges}
                value={this.state.username}
                name="username" 
                placeholder="Username"/>
                <input 
                onChange={this.handleChanges}
                value={this.state.password}
                type="password" 
                name="password" 
                placeholder="Password" />
                <button 
                onClick={this.onLogin}
                className="loginSubmit">Log In</button>
            </div>
            </div>
            </form>
            </div>

            <div className="loginBottom">
            <h5>Having trouble logging in?</h5>
            <div className="alternateForms">
            <button className="forgotPass">Forgot Password?</button>
            <button className="accountCreate">Create Account</button>
            </div>
            </div>
        </div>
        );
    }
}

export default Login;