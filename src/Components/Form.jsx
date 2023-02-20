import React, { useState, useEffect } from "react";
import "./form.css";

const Form = () => {
  // create a random user object to store multiple values with dummy data
  const dummyData = [
    {
      name: "Chandan Kumar",
      panNumber: "ABCD1234E",
    },
    {
      name: "Prashant Kumar",
      panNumber: "GHYR1234E",
    },
  ];

  // create a User object to store multiple values
  const [Users, setUsers] = useState(dummyData);
  const [name, setName] = useState("");
  const [panNumber, setPanNumber] = useState("");

  // create a funtion to check if the pan number already exists in the array

  const checkPanNumber = (panNumber) => {
    // check if the pan number already exists in the array
    const panNumberExists = Users.some((user) => user.panNumber === panNumber);

    // return the result
    // console.log(panNumberExists);
    return panNumberExists;
  };

  //create a function to verify the input pan number with all test cases
  const verifyPanNumber = (panNumber) => {
    // regex to check the pan number
    const regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    // check the pan number with regex also check if number already exists in the array

    if (regex.test(panNumber)) {
      // check if the pan number already exists in the array

      return true;
    } else {
      return false;
    }
  };

  const handleInput = (e) => {
    e.preventDefault();

    // check the pan number with all test cases
    if (verifyPanNumber(panNumber) && !checkPanNumber(panNumber)) {
      alert("Pan Number is valid");
      setUsers([
        ...Users,
        {
          name: name,
          panNumber: panNumber,
        },
      ]);
    } else {
      if (checkPanNumber(panNumber)) alert("Pan Number already exists");
      else alert("Pan Number is not valid");
    }

    // accept multiple values on submit
    // store the values in the object array and set the state
  };

  useEffect(() => {
    console.log({ Users });
  }, [Users]);

  return (
    <div className="signup-form">
      <div className="container">
        <div className="header">
          <h1>Welcome to PAN Portal</h1>
          <p>Please enter your details</p>
        </div>
        <form>
          <div className="input">
            <i className="fa-solid fa-user" />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input">
            <i className="fa-solid fa-envelope" />
            <input
              onChange={(e) => setPanNumber(e.target.value)}
              type="text"
              placeholder="Pan Number"
            />
          </div>
          <input
            className="signup-btn"
            onClick={handleInput}
            type="submit"
            defaultValue="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
