import { TextField, Button } from "@material-ui/core";
import "./Login.style.css";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [isVisible, setVisible] = useState(false);
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={submitHandler}>
        <h1 className="text-3xl font-extrabold font-sans mb-6 text-center">
          Login
        </h1>
        <div className="mb-8 w-full flex items-center">
          <FaUser className="mr-2 text-xl" />
          <TextField
            className="mb-4 w-full"
            label="Enter your Email"
            type="email"
            required
            variant="outlined"
          />
        </div>
        <div className="mb-8 w-full flex items-center relative">
          <FaKey className="mr-2 text-xl" />
          <TextField
            type={isVisible ? "text" : "password"}
            className="mb-4 w-full"
            label="Enter your Password"
            required
            variant="outlined"
          />

          <span
            className="eye-btn"
            onClick={() => setVisible((isVisible) => !isVisible)}
          >
            {isVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="mb-6 flex justify-center ">
          <Button type="submit" className="w-full" variant="contained" color="primary">
            Login
          </Button>
        </div>
        <h3 className="text-sm font-medium font-sans mb-3 text-center">
          Not a member yet?
        </h3>
        <Button onClick={() => navigate("/sign-up")} className="w-full" variant="outlined" color="primary">
          Create an Account
        </Button>
      </form>
    </div>
  );
};

export default Login;
