const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "didusri2001@gmail.com",
    pass: "cejt ngmy zyyl tsxr", // Replace with your Gmail app-specific password
  },
});

exports.sendOtpEmail = functions.https.onCall(async (data, context) => {
  console.log(data.email);
  const email = data.email;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const mailOptions = {
    from: "didula@edugate-9e7d4.firebaseapp.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await admin.firestore().collection("otps").doc(email).set({
      otp,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending OTP email:", error); // Log detailed error
    return { error: error.message || "Failed to send OTP email" };
  }
});
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const nodemailer = require("nodemailer");

// admin.initializeApp();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "didusri2001@gmail.com",
//     pass: "cejt ngmy zyyl tsxr",
//   },
// });

// exports.sendOtpEmail = functions.https.onCall((data, context) => {
//   const email = data.email;
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   const mailOptions = {
//     from: "your-email@gmail.com",
//     to: email,
//     subject: "Your OTP Code",
//     text: `Your OTP code is ${otp}`,
//   };

//   return transporter
//     .sendMail(mailOptions)
//     .then(() => {
//       return admin.firestore().collection("otps").doc(email).set({
//         otp,
//         timestamp: admin.firestore.FieldValue.serverTimestamp(),
//       });
//     })
//     .then(() => {
//       return { success: true };
//     })
//     .catch((error) => {
//       return { error: error.message };
//     });
// });
