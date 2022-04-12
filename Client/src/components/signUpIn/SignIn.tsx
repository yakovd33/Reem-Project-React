import '../../style/memberSignUpIn.css';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const SignIn = () => {
    const [ feedback, setFeedback ] = useState('');
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        axios.post(`http://localhost:4000/users/login/`, { username, password }).then((response : any) => {
            setFeedback(response.data.msg);

            if (response.data.success) {
                localStorage.setItem('user', response.data.user);
                window.location.href = '/';
            }
        });
    }

    return (
        <div className='MemberPage' >
            <div className="formContainer" id="formContainer">
                <div className="form-container sign-in-container">
                    <div className="login">
                        <div className="form">
                            <h1>LOGIN</h1>
                            <form className="login-form" onSubmit={ (e) => onSubmit(e) }>
                                <input type="text" placeholder="username" value={ username} onChange={ (e) => setUsername(e.target.value) } />
                                <input type="password" placeholder="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />

                                { feedback && <div id="login-feedback">{ feedback }</div> }

                                <button type="submit">login</button>

                                <p className="message">Not registered? <a href="/UserSignUp">Create an account</a></p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn;