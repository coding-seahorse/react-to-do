import TodoApp from '../components/TodoApp.js'
import { useState } from "react";

export default function Login({ username }) {

  const [inputLogin, setInputLogin] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrorMsg] = useState("");


  const inputLoginHandler = e => setInputLogin(e.target.value);


  const handleLogin = (e) => {

    e.preventDefault();

    if (inputLogin === username) {
      setSuccess(true);
      localStorage.setItem("#", username);

    } else setErrorMsg("username incorrect.");

  }

  return (
    <>
      {success ? (<TodoApp />) : (
        <div className="body-container">
          <div className="container-form">
            <h2>Log in!</h2>
            <form className="form-login">
              <div className="flex-input">
                <label htmlFor="text">Username</label>
                <input type="text"
                  value={inputLogin}
                  onChange={inputLoginHandler}
                  required />
              </div>
              <button className='button-login' onClick={handleLogin}>Login</button>
              <p className='errmsg'>{errMsg}</p>
            </form>
          </div>
        </div>
      )}
    </>

  )
}
