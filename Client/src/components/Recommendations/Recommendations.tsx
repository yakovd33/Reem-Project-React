import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AuthHelper from '../../helpers/AuthHelper';
import '../../style/Recommenations.css';

interface recommendationInterface {
    region: string;
    address: string;
    type: string;
}

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState<recommendationInterface[]>([]);

    useEffect(() => {
        if (!AuthHelper.isLogged()) {
            axios.get('http://localhost:4000/recommendations/').then((response) => {
                setRecommendations(response.data);
            });
        } else {
            axios.get('http://localhost:4000/recommendations/?region=' + AuthHelper.getUser().region).then((response) => {
                setRecommendations(response.data);
            });
        }
    }, []);

    return (
        <div className="container">
            <h2 id="rec-title">here you can see some police stations and shelters in your region </h2>

            <table className="table-fill">
                <thead>
                    <tr>
                        <th className="text-left">Region</th>
                        <th className="text-left">Address</th>
                        <th className="text-left">Type</th>
                    </tr>
                </thead>
                <tbody className="table-hover">
                    {recommendations.map((recommendation) => (
                        <tr className={ `${ recommendation.region == AuthHelper.getUser().region ? 'current' : '' }` }>
                            <td className="text-left">{ recommendation.region }</td>
                            <td className="text-left">{ recommendation.address }</td>
                            <td className="text-left">{ recommendation.type }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Recommendations