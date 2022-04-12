
import React from 'react';

const UserSignUp = () => {
    console.log('fdsvdssfds');

    return (


        <div className="UsersPage">
            <div className="formContainer" id="formContainer">
                {/* -----------------------------------sign up------------------------------------------------------------- */}
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <div>
                            <input
                                type="checkbox"
                                id="beenHere"
                                name="beenHere"
                                value="true"
                            />
                            <label>Click me if this is your first time here</label>
                            <br></br>

                            <label className="lbl">Create a userName:</label>
                            <div id="divArounduserName">
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    placeholder="userName"
                                // onChange={hnadleonChange("userName")}
                                />
                            </div>

                            <div id="divAroundAge">
                                <label className="lbl">How old are you:</label>
                                <input
                                    type="number"
                                    id="Age"
                                    name="Age"
                                    placeholder="age"
                                //onChange={hnadleonChange("age")}
                                />
                            </div>

                            <div id="divAroundStatus">
                                <label className="lbl">Status</label>
                                <select
                                    id="status"
                                    name="status"
                                //onChange={hnadleonChange("status")}
                                >
                                    <option value="status" disabled>
                                        select an status
                                    </option>
                                    <option value="married">married</option>
                                    <option value="divorsed">divorsed</option>
                                    <option value="widowed">widowed</option>
                                    <option value="inRelationship">in a relationship</option>
                                    <option value="single">single</option>
                                </select>
                            </div>

                            <div id="divAroundRegion">
                                <label className="lbl">region</label>
                                <select
                                    id="region"
                                    name="region"
                                //onChange={hnadleonChange("region")}
                                >
                                    <option value="choose" disabled>
                                        select an option
                                    </option>
                                    <option value="Northern">Northern district</option>
                                    <option value="Haifa">Haifa district</option>
                                    <option value="Central">Central district</option>
                                    <option value="Southern">Southern district</option>
                                    <option value="Jerusalem">Jerusalem district</option>
                                </select>
                            </div>

                            <div id="divAroundkids">
                                <label className="lbl">kids</label>
                                <input
                                    type="text"
                                    id="kidsStr"
                                    name="kidsStr"
                                    placeholder=""
                                //onChange={hnadleonChange("kids")}
                                />
                            </div>

                            <div>
                                <label className="lbl">Have you ever experienced:</label>
                                <input
                                    type="checkbox"
                                    id="physical"
                                    name="physical"
                                    value="physical"
                                //onChange={hnadleonChange("physicalViolence")}
                                />{" "}
                                <label>physical violence</label>
                                <input
                                    type="checkbox"
                                    id="sexual"
                                    name="sexual"
                                    value="sexual"
                                //onChange={hnadleonChange("sexualViolence")}
                                />
                                <label>sexual violence</label>
                                <input
                                    type="checkbox"
                                    id="emotional"
                                    name="emotional"
                                    value="emotional"
                                //onChange={hnadleonChange("emotionalViolence")}
                                />
                                <label>emotional violence</label>
                                <input
                                    type="checkbox"
                                    id="emotionalViolence"
                                    name="emotionalViolence"
                                    value="emotionalViolence"
                                //onChange={hnadleonChange("psychologicalViolence")}
                                />
                                <label>psychological violence</label>
                                <input
                                    type="checkbox"
                                    id="economic"
                                    name="economic"
                                    value="economic"
                                //onChange={hnadleonChange("economicViolence")}
                                />
                                <label>economic violence</label>
                            </div>


                        </div>
                        {/* <button onClick={handleSubmit}>Sign Up</button> */}
                        <button >Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;