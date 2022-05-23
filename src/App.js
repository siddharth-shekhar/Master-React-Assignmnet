import React, { useState, useEffect } from "react";
import View from "./components/View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("employees");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  const [employees, setemployees] = useState(getDatafromLS());

  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  // form submit event
  const handleAddEmployeeSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let employee = {
      name,
      job,
    };
    setemployees([...employees, employee]);
    setName("");
    setJob("");
  };

  const deleteemployee = (isbn) => {
    const filteredEmployees = employees.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setemployees(filteredEmployees);
  };

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="wrapper">
      <h1>add an employee</h1>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddEmployeeSubmit}
          >
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <br></br>
            <label>Job</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setJob(e.target.value)}
              value={job}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              add employee
            </button>
          </form>
        </div>

        <div className="view-container">
          {employees.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View
                      employees={employees}
                      deleteemployees={deleteemployee}
                    />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setemployees([])}
              >
                Remove All
              </button>
            </>
          )}
          {employees.length < 1 && <div>No employees are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
