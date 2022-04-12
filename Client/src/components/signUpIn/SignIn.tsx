//import '../style/memberSignUpIn.css'
import { useState } from 'react';
import React from 'react';

const SignIn = () => {

    let [formInfo, setFormInfo] = useState(
        {
            userName: "",
            age: "",
            status: "",
            feelingScale: "",
            kids: ""
        }
    )

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    React.useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('formContainer');

        signUpButton?.addEventListener('click', () => {
            container?.classList.add('right-panel-active');
        });

        signInButton?.addEventListener('click', () => {
            container?.classList.remove('right-panel-active');
        });
    }, [])
    return (
        <div className='MemberPage' >
            <div className="formContainer" id="formContainer">

                {/* ---------------------------------------------sign in--------------------------------------------------- */}
                <div className="form-container sign-in-container">
                    <div className="login">
                        <form action="#">
                            <h1>Login</h1>
                            <input type="text" placeholder="userName" />
                            <input type="text" placeholder="password" />
                            <button>Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn;