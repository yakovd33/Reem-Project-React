import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AuthHelper from '../../helpers/AuthHelper';
import '../../style/Statistics.css';

const Recommendations = () => {
    const [ users, setUsers ] = useState([]);
    const [ region, setRegion ] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/users/' + region).then((response) => {
            setUsers(response.data);
        });
    }, [ region ]);

    return (
        <div className="container">
            <div className="container-rec">
                <h2 id="stats-title">Statistics </h2>
                
                <select className="select" onChange={ (e) => setRegion(e.target.value) }>
                    <option>Select an option</option>
                    <option value="Northern">Northern district</option>
                    <option value="Haifa">Haifa district</option>
                    <option value="Central">Central district</option>
                    <option value="Southern">Southern district</option>
                    <option value="Jerusalem">Jerusalem district</option>
                </select>
            </div>

            <table className="table-fill">
                <thead>
                    <tr>
                        <th className="text-left">Username</th>
                        <th className="text-left">Age</th>
                        <th className="text-left">Kids</th>
                        <th className="text-left">Region</th>
                        <th className="text-left">Status</th>
                        <th className="text-left">Emotional</th>
                        <th className="text-left">Psychological</th>
                        <th className="text-left">Physical</th>
                        <th className="text-left">Sexual</th>
                        <th className="text-left">Econimic</th>
                    </tr>
                </thead>
                <tbody className="table-hover">
                    { users.map((user : any) => (
                        <tr>
                            <td className="text-left">{ user.username }</td>
                            <td className="text-left">{ user.age }</td>
                            <td className="text-left">{ user.kids }</td>
                            <td className="text-left">{ user.region }</td>
                            <td className="text-left">{ user.status }</td>
                            <td className="text-left">{ user.isEmotionalViolence ? 'YES' : 'NO' }</td>
                            <td className="text-left">{ user.isPsycologicalViolence ? 'YES' : 'NO' }</td>
                            <td className="text-left">{ user.isPysicalViolence ? 'YES' : 'NO' }</td>
                            <td className="text-left">{ user.isSexualViolence ? 'YES' : 'NO' }</td>
                            <td className="text-left">{ user.isEconimicViolence ? 'YES' : 'NO' }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default Recommendations