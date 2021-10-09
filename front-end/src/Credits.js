import { useEffect, useState } from "react";
import "./css/Home.css";
import { AiFillLock } from "react-icons/ai";
import Axios from "axios";

const Credits = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [verifyEmail, setverifyEmail] = useState(false);

  const verifyFunction = () => {
    const timeout = setTimeout(() => {
      setverifyEmail(false);
      setError(false);
    }, 3000);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    verifyFunction();
  });

  const submitForm = () => {
    Axios.post("http://localhost:4000/contact-us", {
      name: name,
      email: email,
      number: number,
      message: message,
    }).then((response) => {
      console.log(response);
      if (response.data.status) {
        setverifyEmail(true);
      } else {
        setError(response.data.message);
      }
    });
  };
  return (
    <>
      <div className="credits-score">
        <div className="under">
          <h3>address</h3>
          <p className="font_9">500 Terry Francois Street</p>
          <p className="font_9">San Francisco, CA 94158</p>
          <p className="font_9">info@mysite.com</p>
          <p className="font_9">Tel: 123-456-7890</p>
        </div>
        <div className="under">
          <h3>contact us</h3>
          <div className="gridder">
            <div className="font_10">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="under-input"
              />
              <input
                type="email"
                placeholder="Email*"
                onChange={(e) => setEmail(e.target.value)}
                className={verifyEmail ? `under-input border` : `under-input`}
              />
              <input
                type="number"
                placeholder="Phone"
                onChange={(e) => setNumber(e.target.value)}
                className="under-input"
              />
            </div>
            <div className="font_11">
              <div>
                <input
                  type="text"
                  placeholder="Type your message*"
                  onChange={(e) => setMessage(e.target.value)}
                  className={
                    verifyEmail ? `under-input1 border` : `under-input1`
                  }
                />
              </div>
              <div>
                <button className="btn" onClick={() => submitForm()}>
                  Submit
                </button>
                {error && (
                  <p style={{ color: "white", marginTop: "10px" }}>{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="under" style={{ textAlign: "center" }}>
          <h3>stay in touch</h3>
          <p className="font_9">Join our mailing list</p>
          <input
            type="text"
            placeholder="Enter your email here*"
            className="dk"
          />{" "}
          <br />
          <div style={{ position: "relative" }}>
            <button className="btn-2">Subscribe Now</button>
            <AiFillLock
              className='lock1'
            />
          </div>
        </div>
      </div>
      <div className="cr">
        <p>© 2023 by AWESOME SNEAKERS.</p>
      </div>
    </>
  );
};

export default Credits;
