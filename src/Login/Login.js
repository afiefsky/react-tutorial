import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/animsition/css/animsition.min.css'
import './vendor/select2/select2.min.css'
import './vendor/daterangepicker/daterangepicker.css'
import './bootstrap.min.css'
import './util.css'
import './main.css'

import Background from './images/bg-01.jpg'

const About = () => {
  return <h2 style={{backgroundColor: 'white'}}>About</h2>
}

const Users = () => {
  return <h2 style={{backgroundColor: 'white'}}>Users</h2>
}

class Form extends Component {
  render() {
    return (
      <div>
        <form className="login100-form validate-form p-b-33 p-t-5">
          <div className="wrap-input100 validate-input" data-validate = "Enter username">
            <input className="input100" type="text" name="username" placeholder="User name" />
            <span className="focus-input100" data-placeholder="&#xe82a;"></span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Enter password">
            <input className="input100" type="password" name="pass" placeholder="Password" autoComplete="off" />
            <span className="focus-input100" data-placeholder="&#xe80f;"></span>
          </div>
          <div className="container-login100-form-btn m-t-32">
            <button className="login100-form-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

class Login extends Component {
  render() {
    return (
      <div className="limiter">
        <div className="container-login100" style={{backgroundImage: `url(${Background})`}}>
          <div className="wrap-login100 p-t-30 p-b-50">
            <span className="login100-form-title p-b-41">
              Account Login
            </span>
            <Router>
              <div>
                {/*<Link className="btn btn-primary btn-block" to="/">Form</Link>
                <Link className="btn btn-danger btn-block" to="/about/">About</Link>
                <Link className="btn btn-warning btn-block" to="/users/">Users</Link>*/}
                <Route path="/" exact component={Form} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default Login