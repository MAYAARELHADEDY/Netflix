import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
const Login = () => {
  const [signState, setSginState] = useState("Sgin In");

  return (
    <div className="login">
      <img src={logo} className="logo-logo" alt="" />
      <div className="login-form">
        <h1>{signState} </h1>
        <form>
          {signState === "Sgin Up" ? (
            <input type="text " placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="email " placeholder="Email" />
          <input type="password " placeholder="password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sgin In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSginState("Sgin Up");
                }}
              >
                Sgin up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSginState("Sgin In");
                }}
              >
                Sgin in Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
