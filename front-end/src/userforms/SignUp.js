import { useEffect, useState } from "react";
import "../css/ModalCart.css";
import { useFilterContext } from "../context/filter_context";
import Axios from "axios";
import BackHome from "./BackHome";

const SignUp = () => {
  const { modal, openModal1, closeModalUN } = useFilterContext();
  const [signupcheck, setSignupCheck] = useState(false);
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [confirmPasswordReg, setconfirmPasswordReg] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSignupCheck(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [signupcheck]);

  const submitUser = (e) => {
    e?.preventDefault();
    Axios.post(
      `http://localhost:4000/create?email=${emailReg}&password=${passwordReg}`,
      {
        email: emailReg,
        password: passwordReg,
        confirmPassword: confirmPasswordReg,
      }
    ).then((response) => {
      console.log(response);
      setSignupCheck(response.data.message);
      if (response.data.verification) {
        window.location.href = "/codechecksignup";
      }
    });
  };

  return (
    <div className={`${modal ? "modal2" : "modal"}`}>
      <div
        className="modal-content3"
        onSubmit={() => window.location.reload(true)}
      >
        <div className="uunew">
          <div className="eyo">
            <div className="JWW_">
              <h1>Sign Up</h1>
              <p className="already">
                Already a member ?{" "}
                <button
                  className="but"
                  onClick={() => {
                    closeModalUN();
                    openModal1();
                  }}
                >
                  Login
                </button>
              </p>
              <div className="thewael">
                <div className="thewael2">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                </div>
                <div className="thewael2">
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setpasswordReg(e.target.value);
                    }}
                  />
                </div>
                <div className="thewael2">
                  <label>Create Password</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setconfirmPasswordReg(e.target.value);
                    }}
                  />
                </div>
                {signupcheck && <p className="check">{signupcheck}</p>}
                <button className="btnn5" onClick={() => submitUser()}>
                  Sign up
                </button>
                <BackHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
