import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/WhatsApp_Image_2020-08-13_at_2.42.29_PM-removebg-preview.png";
import instant from "../../../Assets/NoPath - Copy.png";
import {
    Navbar, Nav, Collapse, NavItem, NavbarToggler, NavbarBrand, Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
import './NavSection.css'
import { UserContext } from "../../../App";
import Login from "../../auth/Login";


const NavSection = () => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [isOpen, setIsOpen] = useState(false);

    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (

        <Navbar className="text-dark navStand" light expand="md">
            <Container>
                <NavbarBrand>
                    <NavLink to="/"><img src={logo} style={{ height: "4.5rem" }} className="ml-2" alt="My Ways logo" /></NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2 bg-info" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav
                        style={{ fontSize: "1.3rem" }}
                        className="ml-auto justify-content-around  align-items-center"
                        navbar
                    >
                        <NavItem>
                            <NavLink className="mr-4 text-dark navfont" to="/">
                                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        For You
      </DropdownToggle>
                                    <DropdownMenu>

                                        <DropdownItem >Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="mr-3 text-dark navfont" to="/about">
                                <img src={instant} alt="" />Instant Apply
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="mr-3 text-dark navfont" to="/service">
                                Pricing
              </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className=" mr-3 text-dark navfont navfont"
                                to="/contact"
                            >
                                About us
              </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavItem>

                    {
                        loggedInUser.email ? <h6>Welcome,</h6> : <><NavLink onClick={() => setIsSignUpOpen(!isSignUpOpen)}
                            className=" mr-3 navSignUP"
                            to="/#">SIGN UP</NavLink>
                            <div className={isSignUpOpen ? "openSignUpForm" : "nonOpenForm"}>
                                <div className="pt-5 d-flex justify-content-around">
                                    <h6 className="p-1">Login</h6>
                                    <h4 className="text-center CrossButton p-1" onClick={() => setIsSignUpOpen(!isSignUpOpen)}> X </h4>
                                </div>
                                <Login signUp="signUp"></Login>
                            </div>
                        </>
                    }


                </NavItem>
                <NavItem>
                    {
                        loggedInUser.email ? <h6>{loggedInUser.name}</h6> : <>  <button onClick={() => setIsOpen(!isOpen)} color="info" className="text-center   btnItem">
                            <NavLink className="mx-3  text-white" to="/#">LOGIN </NavLink>
                        </button>
                            <div className={isOpen ? "openForm" : "nonOpenForm"}>
                                <div className="pt-5 d-flex justify-content-around">
                                    <h6 className="p-1">Login</h6>
                                    <h4 className="text-center CrossButton p-1" onClick={() => setIsOpen(!isOpen)}> X </h4>
                                </div>
                                <Login></Login>
                            </div>
                        </>
                    }
                </NavItem>
            </Container>
        </Navbar>

    );
};

export default NavSection;
