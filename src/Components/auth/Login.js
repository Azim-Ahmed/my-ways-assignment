import React, { useContext, useEffect, useState } from "react";
import {  Card, Form,CardBody } from "reactstrap";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import handleError from "../Input/ErrorHandler";
import InputItem from "../Input/InputItem";
import {createUserWithEmailAndPassword, initializeFirebase,signInWithEmailAndPassword} from "./HandleLogin";
import Success from "../Success/Success";
initializeFirebase();
const initUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},
};

const Login = () => {


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState(null);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/success" } };
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [userInfo, setUserInfo] = useState({ ...initUser });

  const onChangeHandler = (e) => {
    setUserInfo((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
    e.persist();
  };

  const submitHandler = (e) => {
    const errors = handleError(userInfo);
    setUserInfo({ ...userInfo, errors });
    if (Object.keys(errors).length === 0 && newUser) {
      setLoading(true);
      createUserWithEmailAndPassword({
        firstName,
        lastName,
        email,
        password,
      }).then((res) => {
        setLoading(false);
        if (res.error) {
          setUserInfo({ ...userInfo, errors: res });
        } else {
          setUser({ ...res });
          history.replace(from);
        }
      });
    }
    if (!errors.email && !errors.password) {
      if (userInfo.password && userInfo.email && !newUser) {
        setLoading(true);
        signInWithEmailAndPassword({ email, password }).then((res) => {
          
          setLoading(false);
          if (res.error) {
            setUserInfo({ ...userInfo, errors: res });
          } else {
            setUser({ ...res });
            setLoggedInUser(res)
            history.replace(from);
          }
        });
      }
    }
    e.preventDefault();
  };

  useEffect(() => {
    setUserInfo({ ...initUser });
  }, [newUser]);

  useEffect(() => {
    console.log("form login");
  }, []);
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    errors,
  } = userInfo;

  return (
    
     
     <div>
          <Card>
            <CardBody>
              <h2 className="mb-5 text-center loginHeader">
                {newUser ? "Create an account" : "Student"}
              </h2>
              <Form autoComplete="off" onSubmit={submitHandler}>
                {newUser && (
                  <InputItem
                    value={firstName}
                    onChangeHandler={onChangeHandler}
                    error={errors.firstName}
                    name="firstName"
                    customClass="loginInput"
                    autoFocus
                    placeholder="First Name"
                  />
                )}
                {newUser && (
                  <InputItem
                    value={lastName}
                    onChangeHandler={onChangeHandler}
                    error={errors.lastName}
                    name="lastName"
                    customClass="loginInput"
                    placeholder="Last Name"
                  />
                )}
                <InputItem
                  value={email}
                  onChangeHandler={onChangeHandler}
                  error={errors.email}
                  name="email"
                  customClass="loginInput"
                  type="email"
                  placeholder="Email"
                />
                <InputItem
                  value={password}
                  onChangeHandler={onChangeHandler}
                  error={errors.password}
                  name="password"
                  type="password"
                  customClass="loginInput"
                  placeholder="Password"
                />
                {newUser && (
                  <InputItem
                    value={confirmPassword}
                    onChangeHandler={onChangeHandler}
                    type="password"
                    error={errors.confirmPassword}
                    name="confirmPassword"
                    customClass="loginInput"
                    placeholder="Confirm Password"
                  />
                )}
                {errors.error && (
                  <p className="text-danger text-center  py-2">
                    {errors.error}
                  </p>
                )}
                <button className="w-100 SignButton" type="submit">
                  {newUser ? "Sign Up" : "Login"}
                </button>
             
              </Form>
              <p className="text-center pt-2">
                {newUser  ? "Already have an account" : "New to  MyWays"}{" "}
                ?
                <span
                  onClick={() => setNewUser(!newUser)}
                  className="text-warning login"
                >
                  {newUser  ? " Login" : "Sign Up here"}
                </span>
              </p>
            </CardBody>
          </Card>
    
          </div>
  
  );
};

export default Login;
