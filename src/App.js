import { useState } from "react";
import "./App.css";
import graphics from "./grpahic.svg";
import facebook from "./facebook.svg";
import google from "./google.svg";
function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [successMesage, setSuccessMessage] = useState("");
  const [error, setError] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setError([]);
    setSuccessMessage("");
    const newErrors = [];
    if (!email) {
      newErrors.push("Email cannot be Empty");
    }
    if (!name) {
      newErrors.push("Name cannot be Empty");
    }
    if (!password) {
      newErrors.push("Password cannot be Empty");
    }
    if (password !== confirmpassword) {
      newErrors.push("Passwords do not match.");
    }
    if (newErrors.length > 0) {
      setError(newErrors);
      console.log(newErrors);
    } else {
      setError([]);
      setSuccessMessage("Form Submitted successfully");
      console.log("Form submitted successfully");
    }
  }

  return (
    <div className="App">
      <div className="left-div">
        <p id="left-half-text">Find 3D Objects, Mockups and Ilustration here</p>
        <img className="graphic" src={graphics} alt="graphics" />
      </div>
      <div>
        <div className="form-div">
          <h1 className="heading-1">Create Account</h1>
          <div className="row-1">
            <div className="signup-div">
              <img src={google} alt="google-icon" />
              Sign up with Google
            </div>
            <div className="signup-div">
              <img src={facebook} alt="facebook-icon" />
              Sign up with Facebook
            </div>
          </div>
          <p className="or"> -OR-</p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              value={confirmpassword}
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit">Create Account</button>
          </form>

          {error.length > 0 ? (
            <div>
              <ul>
                {error.map((item, index) => (
                  <li className="red">{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="green">{successMesage}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
