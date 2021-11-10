import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../redux/action/auth-action";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import './login.css'

export default function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const history= useHistory()

  const loginUser = (e) => {
    e.preventDefault();
    const authUser={email,password}
    dispatch(loginHandler(authUser,history ))
    history.push('/Dashboard')
    setemail("");
    setpassword("");

  };

  return (
    <div className="Login">
    <div className="body">
  <p className="tip">Bug Tracker</p>
  <div className="cont">
      <div className="form sign-in">
          <h2>Welcome,</h2>
          <label>
              <span>Email</span>
              <input type="email" onChange={(e) => setemail(e.target.value)}/>
          </label>
          <label>
              <span>Password</span>
              <input type="password" onChange={(e) => setpassword(e.target.value)} />
          </label>
          <p class="forgot-pass">Forgot password?</p>
          <button type="button" className="submit" onClick={loginUser}>Sign In</button>
      </div>
      <div className="sub-cont">
          <div className="img">
              <div className="img__text m--up">
                  <h2>New here?</h2>
                  <p>Sign up and discover great amount of new opportunities!</p>
                  <Link to="/register">
                        <div className="img__btn">
                            <span className="m--up">Sign Up</span>
                        </div>
                  </Link>
              </div>
          </div>
      </div>
  </div>
  
</div>
</div>
  );
}
