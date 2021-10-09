import { useState } from "react";
import Axios from "axios";
import BackHome from "./BackHome";

const VerifyCode = () => {
  const [uniqueString, setuniqueString] = useState();
  const [verifycheck, setverifyCheck] = useState(false);

  const submitVerification = () => {
    Axios.post("http://localhost:4000/verify-code", {
      uniqueString: uniqueString,
    }).then((response) => {
      if (response.data.message) {
        setverifyCheck(response.data.message);
      } else if (!response.data.message) {
        window.location.href = "/newpassword";
      }
    });
  };
  return (
    <div className="U2">
      <div className="uunew">
        <div className="eyo">
          <div className="JWW_">
            <h1>Create New Password</h1>
            <p style={{ marginBottom: "30px" }} className="already">
              Please enter your verification code
            </p>
            <div
              className="thewael"
              style={{ maxWidth: "320px", width: "100%" }}
            >
              <div className="thewael2">
                <label>Code</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setuniqueString(e.target.value);
                  }}
                />
              </div>
              {verifycheck && <p className="check">{verifycheck}</p>}
              <button className="btnn5" onClick={() => submitVerification()}>
                Verify code
              </button>
              <BackHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
