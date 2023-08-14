// import React from 'react'
import DeleteAllUsers from "./DeleteAllUsers";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/UserSlice";
import DisplayUsers from "../components/DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  const myStyle = {
    marginLeft: "20%",
    fontSize: "2.0rem",
    fontWeight: "bold",
  };
  const myStyleB = {
    marginLeft: "40%",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "10px 10px",
    borderRadius: "15px",
    backgroundColor: "#241468",
    color: "white",
    // marginTop: '10px'
  };
  const myStyleU = {
    marginLeft: "20%",
    padding: "5px",
  };
  return (
    <>
      <div className="content">
        <div className="admin-portal">
          <div className="admin-subtitle" style={myStyle}>
            List of User Details
            <button
              className="btn add-btn"
              style={myStyleB}
              onClick={() => addNewUser(fakeUserData())}
            >
              Add New User
            </button>
          </div>
        </div>
        <ul style={myStyleU}>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUsers />
      </div>
    </>
  );
};

export default UserDetails;
