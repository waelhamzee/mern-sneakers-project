import { useState } from "react";
import Axios from "axios";
import { useFilterContext } from "../context/filter_context";
import "../css/ModalCart.css";
import BackHome from "./BackHome";

const NewPassword = () => {
  const [password, setPassword] = useState();
  const [newpasscheck, setnewpassCheck] = useState(false);
  const { email } = useFilterContext();
  const submitNewPass = () => {
    Axios.post("http://localhost:4000/set-password", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data) {
        setnewpassCheck(response.data.message);
      }
    });
  };
  return (
    <div className="U2">
      <div className="uunew ">
        <div className="eyo">
          <div className="JWW_">
            <h1>Create New Password</h1>
            <p style={{ marginBottom: "30px" }} className="already">
              Please enter your new password
            </p>
            <div
              className="thewael"
              style={{ maxWidth: "320px", width: "100%" }}
            >
              <div className="thewael2">
                <label>New Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {newpasscheck && <p className="check">{newpasscheck}</p>}
              <button className="btnn5" onClick={() => submitNewPass()}>
                Submit
              </button>
              <BackHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
