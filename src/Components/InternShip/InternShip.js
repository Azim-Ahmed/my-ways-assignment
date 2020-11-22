import React from 'react';
import { Link } from 'react-router-dom';

const InternShip = () => {
    return (
        <div className="text-center pt-5 mt-5">
        <p>Find matching internships</p>
        <p>Hire right talent</p>
        <p>Work from Home</p>
        <p>Back to ,<Link to="/">Home</Link></p>
        </div>
    );
};

export default InternShip;