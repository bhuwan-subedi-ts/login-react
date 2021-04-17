import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './SignUp'


function LoginForm() {
    return ( 
    <Router>
      <div class="login">
      <div class="container">
        <section id="content">
        <form action="">
          <h1>Login Form</h1>
          <div>
            <input type="text" placeholder="Username" required="" id="username" />
          </div>
          <div>
            <input type="password" placeholder="Password" required="" id="password" />
          </div>
          <div>
            <input type="submit" value="Log in" />
            <Link to="/forgetpassword"><a>Forgot password?</a></Link>
            <Link to="/signup"><a>Register</a></Link>
          </div>
            <Switch>
              <Route path="/signup"><SignUp></SignUp></Route>
            </Switch>
          
        </form>
      </section>
      </div>    
      </div>
           
    </Router>
    )
}

export default LoginForm