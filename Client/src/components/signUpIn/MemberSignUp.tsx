
import React from 'react';

const MemberSignUp = () => {
    return (
        <div className='form-container sign-up-container'>

            <form id="userForm" action='#' >
                <h1>Create Account</h1>
                <div >

                    <label className="lbl">your ID: </label>
                    <div id="divArounduserID">
                        <input type="text" id="ID" name="ID" placeholder="ID" />
                    </div>

                    <label className="lbl">your full name: </label>
                    <div id="divArounduserFullName">
                        <input type="text" id="FullName" name="FullName" placeholder="FullName" />
                    </div>

                    <label className="lbl">Create a userName: </label>
                    <div id="divArounduserName">
                        <input type="text" id="fname" name="fname" placeholder="userName " />
                    </div>

                    <div id="divAroundAge">
                        <label className="lbl">How old are you: </label>
                        <input type="number" id="Age" name="Age" placeholder="age" />
                    </div>

                    <div id="divAroundSex">
                        <label className="lbl">Sex: </label>
                        <select id="Sex" name="Sex">
                            <option value="status" disabled>select your sex</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>

                    <label className="lbl">your phone number: </label>
                    <div id="divArounduserPhoneNumber">
                        <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder="PhoneNumber" />
                    </div>

                    <div id="divAroundEmail">
                        <label className="lbl">your E-mail: </label>
                        <input type="email" id="Email" name="Email" placeholder="@example.com" />
                    </div>

                    <div id="divAroundCV">
                        <label className="lbl">upload your CV: </label>
                        <input type="text" id="CV" name="CV" placeholder="pdf file" />
                    </div>

                    <div id="divAroundPassword">
                        <label className="lbl">password: </label>
                        <input type="password" id="Password" name="EmaPasswordil" placeholder="****" />
                    </div>



                </div>
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default MemberSignUp;