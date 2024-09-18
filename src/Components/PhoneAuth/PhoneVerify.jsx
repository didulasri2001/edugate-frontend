import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase";

// import { auth } from "../../firebase";

function PhoneVerify() {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
      const response = (window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Recaptcha solved!");
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": () => {
            console.log("Recaptcha expired!");
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      ));

      window.recaptchaVerifier.render();
      //     return signInWithPhoneNumber(auth, number, recaptchaVerifier);
      console.log(response);

      setResult(response);
      setFlag(true);
      console.log(number);

      signInWithPhoneNumber(auth, number, window.recaptchaVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).

          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
        });
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            {/* <PhoneInput
              international
              defaultCountry="IN"
              value={number}
              onChange={(phone) => setNumber(phone)}
              placeholder="Enter Phone Number"
            /> */}
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default PhoneVerify;
