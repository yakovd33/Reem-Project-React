import axios from 'axios';
import React, { useState } from 'react';
import '../../style/memberSignUpIn.css';

const UserSignUp = () => {
    const [ feedback, setFeedback ] = useState('');
    const [ isFirstTime, setIsFirstTime ] = useState(true);
    const [ username, setUsername ] = useState('');
    const [ age, setAge ] = useState('');
    const [ status, setStatus ] = useState('');
    const [ region, setRegion ] = useState('');
    const [ kids, setKids ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ isPysicalViolence, setPhysicalViolence ] = useState(false);
    const [ isSexualViolence, setIsSexualViolence ] = useState(false);
    const [ isPsycologicalViolence, setIsPsychologicalViolence ] = useState(false);
    const [ isEmotionalViolence, setIsEmotionalViolence ] = useState(false);
    const [ isEconimicViolence, setIsEconimicViolence ] = useState(false);

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        axios.post(`http://localhost:4000/users/signup/`, { isFirstTime, username, age, status, region, kids, password, isPsycologicalViolence, isSexualViolence, isPysicalViolence, isEmotionalViolence, isEconimicViolence }).then((response : any) => {
            setFeedback(response.data);
        });
    }

    return (
        <div className="MemberPage">
            <div className="formContainer" id="formContainer">
                <div className="login">
                    <div className="form signup">
                        <h1>CREATE AN ACCOUNT</h1>
                        <form className="login-form" onSubmit={ (e) => onSubmit(e) }>
                            <label className="checkbox-label" htmlFor="first-time-checkbox"><input type="checkbox" name="" id="first-time-checkbox" checked={ isFirstTime } onChange={ (e) => setIsFirstTime(e.target.checked) } /> Click if it's your first time here</label>
                            <label className="form-label">USERNAME:</label>
                            <input type="text" placeholder="USERNAME" value={ username } onChange={ (e) => setUsername(e.target.value) } />

                            <label className="form-label" htmlFor="">HOW OLD ARE YOU:</label>
                            <input type="number" placeholder="AGE" value={ age } onChange={ (e) => setAge(e.target.value) } />

                            <label className="form-label" htmlFor="">WHAT IS YOUR STATUS?</label>
                            <select className="select" onChange={ (e) => setStatus(e.target.value) }>
                                <option>Select an option</option>
                                <option value="married">Married</option>
                                <option value="married">Divorced</option>
                                <option value="married">Widowed</option>
                                <option value="married">In a relationship</option>
                                <option value="married">Single</option>
                            </select>

                            <label className="form-label" htmlFor="">WHERE DO YOU LIVE?</label>
                            <select className="select" onChange={ (e) => setRegion(e.target.value) }>
                                <option>Select an option</option>
                                <option value="Northern">Northern district</option>
                                <option value="Haifa">Haifa district</option>
                                <option value="Central">Central district</option>
                                <option value="Southern">Southern district</option>
                                <option value="Jerusalem">Jerusalem district</option>
                            </select>

                            <label className="form-label" htmlFor="">HOW MANY KIDS DO YOU HAVE?</label>
                            <input type="number" placeholder="KIDS" value={ kids } onChange={ (e) => setKids(e.target.value) } />

                            <label className="form-label" htmlFor="">CHOOSE A PASSWORD</label>
                            <input type="password" placeholder="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />

                            <div id="choose-violence">
                                <div className="lbl">Have you ever experienced:</div>
                                <label className="checkbox-label"><input type="checkbox" checked={ isPysicalViolence } onChange={ (e) => setPhysicalViolence(e.target.checked) } value="physical" /> Pysical violence</label>
                                <label className="checkbox-label"><input type="checkbox" checked={ isSexualViolence } onChange={ (e) => setIsSexualViolence(e.target.checked) } value="sexual" /> Sexual violence</label>
                                <label className="checkbox-label"><input type="checkbox" checked={ isPsycologicalViolence } onChange={ (e) => setIsPsychologicalViolence(e.target.checked) } value="sexual" /> Psychological violence</label>
                                <label className="checkbox-label"><input type="checkbox" checked={ isEmotionalViolence } onChange={ (e) => setIsEmotionalViolence(e.target.checked) } value="sexual" /> Emotional violence</label>
                                <label className="checkbox-label"><input type="checkbox" checked={ isEconimicViolence } onChange={ (e) => setIsEconimicViolence(e.target.checked) } value="sexual" /> Economic violence</label>
                            </div>

                            { feedback && <div id="signup-feedback">{ feedback }</div> }

                            <button type="submit">SIGNUP</button>
                            <p className="message">Already have an account? <a href="/SignIn">Login</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;