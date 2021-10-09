import { useEffect, useState } from "react";
import "../css/ModalCart.css";
import Axios from "axios";
import { useFilterContext } from "../context/filter_context";
import { reloadFunction } from "../utils/helpers";
import BackHome from "./BackHome";

const LogIn = () => {
  const { modal1, openModalUN, closeModal1, openModal2 } = useFilterContext();
  const [logincheck, setLoginCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoginCheck(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [logincheck]);

  const submitLogin = (e) => {
    e?.preventDefault();
    Axios.post(`http://localhost:4000/login`, {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginCheck(response.data.message);
      } else {
        localStorage.setItem("token", response.data.token);
        reloadFunction();
      }
    });
  };
  return (
    <div className={`${modal1 ? "modal2" : "modal"}`}>
      <div
        className="modal-content3"
        onSubmit={() => window.location.reload(true)}
      >
        <div className="uunew">
          <div className="eyo">
            <div className="JWW_">
              <h1>Log In</h1>
              <p className="already">
                New to this site ?{" "}
                <button
                  onClick={() => {
                    closeModal1();
                    openModalUN();
                  }}
                  className="but"
                >
                  SignUp
                </button>
              </p>
              <div className="thewael">
                <div className="thewael2">
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="thewael2">
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                {logincheck && <p className="check">{logincheck}</p>}
                <button
                  onClick={() => {
                    closeModal1();
                    openModal2();
                  }}
                  className="thawolf"
                >
                  Forgot password ?
                </button>
                <button
                  className="btnn5"
                  onClick={() => {
                    submitLogin();
                  }}
                >
                  Login
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

export default LogIn;
