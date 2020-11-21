import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './Banner.css'

const Banner = () => {
    return (
       <Container className="text-center mt-5 pt-5">
           <div>
               <h1>Apply and hear back every time</h1>
           <p className="mb-4">Exploring internships or jobs? Say good-bye to the typical  job portals and use <br/> the power of Artificial Intelligence to become successful, faster.</p>
           </div>
           <button className="startedButton p-1"> Get Started </button>
           {/* <Link>Get Started</Link> */}
       </Container>
    );
};

export default Banner;