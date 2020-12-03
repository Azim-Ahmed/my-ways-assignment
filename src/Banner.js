import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { UserContext } from './App';
import './Banner.css'
import Login from './Components/auth/Login';

const Banner = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
       <Container className="text-center mt-5 pt-5">
           <Row className="text-center">
              <Col>
              <h1>Apply and hear back every time</h1>
           <p className="my-4">Exploring internships or jobs? Say good-bye to the typical  job portals and use <br/> the power of Artificial Intelligence to become successful, faster.</p>
          
           <Link to={loggedInUser.email ? '/internship' : '/'}>  <button onClick={() => setIsSignUpOpen(!isSignUpOpen)} className="startedButton p-1"> Get Started </button></Link>

           <><div className={isSignUpOpen ? "openBannerForm text-center" : "nonOpenForm"}>
                               
                                  
                               <button className=" CrossButton  p-2" onClick={() => setIsSignUpOpen(!isSignUpOpen)}> X </button>
                          
                           <Login signUp = "signUp"></Login>
                       </div></>
              </Col>
          

           </Row>
       </Container>
    );
};

export default Banner;