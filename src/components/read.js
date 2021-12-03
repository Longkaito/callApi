import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read(props) {
  const [dataApi, setDataApi] = useState([]);
  const getDataApi = async () => {
    const apiUrl = "https://61a8df9933e9df0017ea3bbf.mockapi.io/callApi";
    try {
      const response = await axios.get(apiUrl);
      setDataApi(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleUpdate(id) {
    props.handleUpdate(id);
  }

  function handleDelete(id) {
    const apiUrl = `https://61a8df9933e9df0017ea3bbf.mockapi.io/callApi/${id}`;
    axios
      .delete(apiUrl, {
        headers: {
          Authorization: "authorizationToken",
        },
        data: {
          source: "source",
        },
      })
      .then(() => {
        getDataApi();
      });
    alert("Delete user success");
  }

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div className="read">
      <Link to="/create" className="read__add">
        Add
      </Link>

      <table>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Checkbox Value</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </tbody>
        {dataApi.map((element) => {
          return (
            <tbody key={element.id}>
              <tr>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.checkbox === true ? "Checked" : "Unchecked"}</td>
                <td>
                  <Link
                    to="/update"
                    onClick={() => handleUpdate(element.id)}
                    className="update-button"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(element.id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default Read;
