import React, { useContext, useState } from "react";
import "./AddService.css";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import uploadIcon from "../../../Assets/icons/upload.png";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

const AddService = () => {
  const [loggedInUser] = useContext(UserContext);

  const history = useHistory();
  const [info, setInfo] = useState({ name: "prime minister home" });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    console.log(info);
    e.preventDefault();
    fetch("https://secret-lake-59293.herokuapp.com/addBooking", {
      method: "POST",
      headars: { "content-type": "application/json" },
      body: JSON.stringify({ name: "sufina" }),
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          console.log("done");
        }
      });
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("title", info.title);
    // formData.append("description", info.description);
    // fetch("https://aqueous-mountain-26751.herokuapp.com/addService", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     history.push("/");
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="addService  container-fluid pr-0 ">
      <div className="addService row pt-4">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <div className="header-option d-flex justify-content-between  ml-5 ">
            <h4 className=" text-brand "> Add Rent House </h4>
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
            {/* {
                event.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : event.success = ""
            } */}

            <form className=" " action="">
              <div className="form">
                <div className="formLeft">
                  <h5>Service Title </h5>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter title"
                    id=""
                    onChange={handleChange}
                  />
                  <h5>Location</h5>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    id=""
                    onChange={handleChange}
                  />
                  <h5>No of Bathroom</h5>
                  <input
                    type="text"
                    name="bathroom"
                    placeholder="number of bathroom"
                    id=""
                    onChange={handleChange}
                  />
                </div>

                <div className="formRight">
                  <h5>Price </h5>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    id=""
                    onChange={handleChange}
                  />
                  <h5>No of Bedroom</h5>
                  <input
                    type="text"
                    name="bedroom"
                    placeholder="number of bedroom"
                    id=""
                    onChange={handleChange}
                  />
                  <h5> Thumbnail </h5>
                  <div className="uploadFile">
                    <input
                      type="file"
                      accept="image/*"
                      className="custom-file-input"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <div id="uploadImageText">
                      {" "}
                      <img
                        className="uploadIcon "
                        src={uploadIcon}
                        alt=""
                      />{" "}
                      <strong>Upload image</strong>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-auto mr-5" style={{ width: " 140px" }}>
                <button onClick={handleSubmit} className="btn btn-success ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
