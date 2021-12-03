import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Update(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    const apiUrl = `https://61a8df9933e9df0017ea3bbf.mockapi.io/callApi/${props.id}`;
    const getDataApi = async () => {
      try {
        const response = await axios.get(apiUrl);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setCheckbox(response.data.checkbox);
      } catch (error) {
        console.log(error);
      }
    };

    getDataApi();
  }, [props.id]);

  function handleUpdate() {
    if (firstName && lastName) {
      const apiUrl = `https://61a8df9933e9df0017ea3bbf.mockapi.io/callApi/${props.id}`;
      axios.put(apiUrl, { firstName, lastName, checkbox });
      alert("Update user success");
    } else {
      alert("Data field can't empty");
    }
  }

  return (
    <div className="update">
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
      <div className="update__button">
        <Link to="/read" className="back">
          <i className="fas fa-long-arrow-alt-left"></i>
          Back
        </Link>
        <Link className="updateData" to="/read" onClick={handleUpdate}>
          Update
        </Link>
      </div>
    </div>
  );
}

export default Update;
