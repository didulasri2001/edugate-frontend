import React, { useState } from "react";
import "./EmailVerify.css";
import { OtpInput } from "reactjs-otp-input";
import { Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import verify from "../Assets/verify.png";
const basurl = "http://localhost:3001/api";

const EmailVerify = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Handle sending OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    console.log(email);

    try {
      const response = await axios.post(`${basurl}/send-email-otp`, {
        email,
      });
      if (response.data.success) {
        setSuccess("OTP sent successfully!");
        setIsOtpSent(true);
      } else {
        setError("Failed to send OTP. Try again later.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Handle verifying OTP
  const verifyOtp = async () => {
    setError("");
    setSuccess("");

    if (!otp || otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(`${basurl}/verify-email-otp`, {
        email,
        enteredOtp: otp,
      });
      if (response.data.success) {
        setSuccess("email verified successfully!");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="p-4 box">
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      {/* Send OTP Form */}
      {!isOtpSent ? (
        <>
          <span className="forgetPasswords">Forgot Password</span>
          <Form onSubmit={sendOtp}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <div className="otpButtonCon">
              <Button type="submit" variant="primary" className="otpButton ">
                Send OTP
              </Button>
            </div>
          </Form>
        </>
      ) : (
        <>
          <div className="veriCon">
            {/* <img src={verify} alt="verification" className="veriImg" /> */}
            <span className="verification">Verification</span>
            <span className="otpInstructions">
              We will send you a One Time Password (OTP) on your email address.
            </span>
          </div>
          <div className="otpForm">
            <Form onSubmit={verifyOtp}>
              <Form.Group className="mb-3">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    width: "40px",
                    height: "40px",
                    fontSize: "14px",
                    borderRadius: "8px",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                  containerStyle={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "5px",
                  }}
                />
              </Form.Group>
              <div className="otpButtonCon">
                <Button type="submit" variant="primary" className="otpButton ">
                  Verify OTP
                </Button>
              </div>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailVerify;
///gasd nfxn uwwo tgvl
