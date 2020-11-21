import React, { useContext, useEffect, useState } from "react";
import "./MyRent.css";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import MyRentServiceTable from "./MyRentServiceTable";

const MyRent = () => {
  const [loggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [adminInfo, setAdminInfo] = useState({});

  const handleChange = (e) => {
    const newAdminInfo = { ...adminInfo };
    newAdminInfo[e.target.name] = e.target.value;
    setAdminInfo(newAdminInfo);
  };

  const [allOrderList, setAllOrderList] = useState([]);

  useEffect(() => {
    fetch("https://secret-lake-59293.herokuapp.com/myRent")
      .then((res) => res.json())
      .then((data) => {
        setAllOrderList(data);
      });
  }, []);

  return (
    <div className="addService  container-fluid pr-0 ">
      <div className="addService row pt-4">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <div className="header-option d-flex justify-content-between  ml-5 ">
            <h4 className=" text-brand "> My Rent </h4>
            <div className="d-flex align-items-center mt-3 mr-5">
              <img
                src={loggedInUser.photo}
                style={{ width: "44px", height: "44px", marginTop: "" }}
                className="card-img-top rounded-circle mr-2"
                alt="..."
              />
              <h5 className="text-brand"> {loggedInUser.name} </h5>
            </div>
          </div>

          <div className="rightOption ">
            <div
              className=" bg-white pt-5 pl-4 pr-4 m-4 table-responsive-sm"
              style={{ borderRadius: "20px", minHeight: "150px" }}
            >
              <table className="table table-borderless ">
                <thead>
                  <tr>
                    {/* <div className="table-header"> */}
                    <th scope="col">House name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    {/* </div> */}
                  </tr>
                </thead>

                {allOrderList.map((singleOrder) => (
                  <MyRentServiceTable
                    key={singleOrder._id}
                    singleOrder={singleOrder}
                  />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRent;
