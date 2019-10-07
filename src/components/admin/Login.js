import React from 'react';
import styles from '../style.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

let loginDetails = ['tanveerk86@gmail.com', 'Masai@1'];

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            inputEmail: '',
            inputPassword: ''
        }
    }

    inputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    loginSubmit = (event) => {
        event.preventDefault();
        if(this.state.inputEmail == loginDetails[0] && this.state.inputPassword == loginDetails[1]){
            this.props.history.push('/dashboard')
        }else{
            alert("Your Email & Password is Wrong!")
        }
    }

    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mt-5">
                            <h1>Login to Access Admin</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.adminLogin}>
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-6">
                                <form onSubmit={this.loginSubmit}>
                                    <div class="form-group">
                                        <label>Email address</label>
                                        <input name="inputEmail" type="email" class="form-control" placeholder="Enter Email" required onChange={this.inputChange} value={this.state.inputEmail}/>
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input name="inputPassword" type="password" class="form-control" placeholder="Enter Password" required onChange={this.inputChange} value={this.state.inputPassword} />
                                    </div>
                                    <button type="submit" class="btn btn-danger">Login Now</button>
                                </form>
                            </div>
    
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;