import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
const basurl = "http://localhost:3000/api";

const PhoneVerify = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Handle sending OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }
    console.log(phoneNumber);

    try {
      const response = await axios.post(`${basurl}/send-otp`, { phoneNumber });
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
      const response = await axios.post(`${basurl}/verify-otp`, {
        phoneNumber,
        enteredOtp: otp,
      });
      if (response.data.success) {
        setSuccess("Phone number verified successfully!");
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
        <Form onSubmit={sendOtp}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Send OTP
          </Button>
        </Form>
      ) : (
        <Form onSubmit={verifyOtp}>
          <Form.Group className="mb-3">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Verify OTP
          </Button>
        </Form>
      )}
    </div>
  );
};

export default PhoneVerify;
