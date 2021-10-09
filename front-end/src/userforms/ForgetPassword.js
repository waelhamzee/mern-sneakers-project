import "../css/ModalCart.css";
import { useFilterContext } from "../context/filter_context";
import { useState, useEffect } from "react";
import Axios from "axios";
import BackHome from "./BackHome";

const ForgetPassword = () => {
  const { modal2 } = useFilterContext();
  const [forgetcheck, setforgetCheck] = useState(false);
  const { email, setEmail } = useFilterContext();
  const submitForgetPass = () => {
    Axios.post("http://localhost:4000/forget-pass", {
      email: email,
    }).then((response) => {
      console.log(response);
      setforgetCheck(response.data.message);
      if (response.data.sent) {
        window.location.href = "/codecheck";
      }
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setforgetCheck(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [forgetcheck]);

  return (
    <div className={`${modal2 ? "modal2" : "modal"}`}>
      <div
        className="modal-content3"
        onSubmit={() => window.location.reload(true)}
      >
        <div className="uunew ">
          <div className="eyo" style={{ width: "auto" }}>
            <div className="JWW_">
              <h1>Create New Password</h1>
              <p style={{ marginBottom: "30px" }} className="already">
                Please enter your email address
              </p>
              <div
                className="thewael"
                style={{ maxWidth: "320px", width: "100%" }}
              >
                <div className="thewael2">
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                {forgetcheck && <p className="check">{forgetcheck}</p>}
                <button className="btnn5" onClick={() => submitForgetPass()}>
                  Create Password
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

export default ForgetPassword;
