import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    if (firstName && lastName) {
      axios.post(`https://61a8df9933e9df0017ea3bbf.mockapi.io/callApi`, {
        firstName,
        lastName,
        checkbox,
      });
      setFirstName("");
      setLastName("");
      setCheckbox(false);
      alert("Add user success");
    } else {
      alert("Data field can't be empty ");
    }
  };

  return (
    // <Routes>
    <div className="create">
      <form action="">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </form>
      <form action="">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
      <form action="">
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
        <label htmlFor="">I agree to the Terms and Conditions</label>
      </form>
      <Link to="/read" className="back">
        <i className="fas fa-long-arrow-alt-left"></i>
        Back
      </Link>
      <button onClick={postData}>Submit</button>
    </div>
    // </Routes>
  );
}

export default Create;
