import Read from "./components/read";
import Create from "./components/create";
import Update from "./components/update";
import "./App.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [id, setId] = useState();
  function handleUpdate(id) {
    setId(id);
  }

  return (
    <div className="container">
      <div className="box">
        <h2>CRUD ReactJS</h2>

        <Routes>
          <Route path="" element={<Read handleUpdate={handleUpdate} />}></Route>
          <Route
            path="/read"
            element={<Read handleUpdate={handleUpdate} />}
          ></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update" element={<Update id={id} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
