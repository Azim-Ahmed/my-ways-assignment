import React from 'react';
import { Link } from 'react-router-dom';
import success from '../../Assets/Icon awesome-check-circle.svg'

const Success = () => {
    return (
        <div className="text-center successBanner w-50">
            <div className="m-5  p-5">
            <img src={success} alt=""/>
            <h1>Thanks, successful.</h1>
            
        </div>
        <p>Back to ,<Link to="/">Home</Link></p>
        </div>
    );
};

export default Success;