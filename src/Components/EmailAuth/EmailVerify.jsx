import React, { useState } from "react";
import "./EmailVerify.css";
import { OtpInput } from "reactjs-otp-input";
import { Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import verify from "../Assets/verify.png";
import lock from "../Assets/lock.png"; // Import lock icon if needed

const basurl = "http://localhost:3001/api";

const EmailVerify = ({ setShowNewPasswordInput }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showNewPasswordInput, setShowNewPasswordInputLocal] = useState(false);
  const [message, setMessage] = useState("");

  // Handle sending OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${basurl}/send-email-otp`, { email });
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
  const verifyOtp = async (e) => {
    e.preventDefault();
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
        setSuccess("Email verified successfully!");
        setShowNewPasswordInputLocal(true); // Show new password input
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Handle updating the password
  const handleNewPassword = async (e) => {
    e.preventDefault();
    try {
      // Logic to update the password (e.g., through your API)
      // Assuming an endpoint exists for this, make an API call here
      const response = await axios.post(`${basurl}/update-password`, {
        email,
        newPassword,
      });
      if (response.data.success) {
        setMessage("Password updated successfully");
        setShowNewPasswordInputLocal(false); // Hide password input
      } else {
        setError("Failed to update password. Try again.");
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
      {!isOtpSent && !showNewPasswordInput ? (
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
              <Button type="submit" variant="primary" className="otpButton">
                Send OTP
              </Button>
            </div>
          </Form>
        </>
      ) : !showNewPasswordInput ? (
        <>
          <div className="veriCon">
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
                <Button type="submit" variant="primary" className="otpButton">
                  Verify OTP
                </Button>
              </div>
            </Form>
          </div>
        </>
      ) : (
        <>
          <span className="changePassword">Change Password</span>
          <div className="inputContainer">
            <img src={lock} alt="lock icon" />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <img src={lock} alt="lock icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="loginButton">
            <button onClick={handleNewPassword}>Update Password</button>
          </div>
          {message && <span className="message">{message}</span>}
        </>
      )}
    </div>
  );
};

export default EmailVerify;
