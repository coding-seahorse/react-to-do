import Login from '../components/Login.js';
import { useState } from "react";
import TodoApp from '../components/TodoApp.js';

export default function SignUp() {

    const [signedUp, setSignedUp] = useState(false);
    const [username, setUsername] = useState("");
    const [inputValid, setInputValid] = useState("");
    const [errMsg, setErrorMsg] = useState("");
    const regex = /^.{5,20}$/;


    const inputUsername = e => {

        setUsername(e.target.value);

        if (regex.test(e.target.value)) {
            setInputValid("valid");
            setErrorMsg("");

        } else {
            setInputValid("invalid");
            setErrorMsg("Your username must be between 5 and 20 characters long.");
        }
    }


    const handleUsername = e => {

        e.preventDefault();

        if (inputValid === "valid") setSignedUp(true);
        else setErrorMsg("Your username must be between 5 and 20 characters long.");
    }

    return (
        <>
            {localStorage.getItem('#') ? (<TodoApp />) : signedUp ? (<Login username={username} />) : (
                <div className="body-container">
                    <div className="container-form">
                        <h2>Get Started.</h2>
                        <form className="form-login">
                            <div className="flex-input">
                                <label htmlFor="text">Username</label>
                                <input type="text"
                                    id="password"
                                    className={inputValid}
                                    value={username}
                                    onChange={inputUsername}
                                    required />
                            </div>
                            <button className='button-login' onClick={handleUsername}>Sign Up</button>
                        </form>
                        <p className='errmsg'>{errMsg}</p>
                    </div>
                </div>
            )}
        </>
    )
}
