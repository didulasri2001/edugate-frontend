import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase";
import { set } from "date-fns";

function PhoneVerify() {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  // Initialize ReCaptcha only once when component mounts
  // useEffect(() => {
  //   initializeRecaptcha();
  // }, []);

  const initializeRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container", // Make sure this ID matches the div in the render
        {
          size: "invisible",
          callback: (response) => {
            console.log("ReCAPTCHA solved!");
            getOtp();
          },
          "expired-callback": () => {
            console.log("ReCAPTCHA expired!");
          },
        },
        auth
      );
    }
  };

  const getOtp = async (e) => {
    initializeRecaptcha(); // Reinitialize ReCaptcha before sending OTP
    e.preventDefault();
    setError("");
    if (!number) return setError("Please enter a valid phone number!");

    try {
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, number, appVerifier).then(
        (confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setFlag(true);
          setResult(confirmationResult);
          console.log("OTP sent successfully!");
        }
      );

      // // Send OTP
      // const confirmationResult = await signInWithPhoneNumber(
      //   auth,
      //   number,
      //   appVerifier
      // );
      // setResult(confirmationResult); // Store confirmationResult in state
      // setFlag(true); // Show OTP input
      // console.log("OTP sent successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (!otp) return setError("Please enter the OTP!");

    try {
      if (!result)
        throw new Error("OTP not sent! Please request the OTP again.");
      await result.confirm(otp); // Use confirmationResult to verify OTP
      navigate("/home"); // Navigate to home on successful OTP verification
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
            <div id="recaptcha-container"></div>{" "}
            {/* Ensure the container exists */}
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send OTP
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
              Verify OTP
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default PhoneVerify;
