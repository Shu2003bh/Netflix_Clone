import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
// import { sign } from 'jsonwebtoken';
import { signup, login } from '../../firebase.js'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {


  const [signstate, setSignstate] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (signstate === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className='login-spinner'>
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    );
  }

    return (
      loading ? <div className="login-spinner">
        <img src={netflix_spinner} alt="" />
      </div>:
      <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form action="">
          {signstate === "Sign Up" ? <input value={name} onChange={(e)=>{ setName(e.target.value)}} type="text" placeholder='Your Name' /> : <></>}
          <input value={email} onChange={(e)=>{ setEmail(e.target.value)}}   type="email" placeholder='Email' />
          <input value={password} onChange={(e)=>{ setPassword(e.target.value)}} type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="Checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign In" ? (
            <p>
              New to Netflix ?
              <span onClick={() => setSignstate("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account ?
              <span onClick={() => setSignstate("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Login
