// src/config/nodemailer.js

import nodemailer from "nodemailer";

// Replace these with your actual mail provider's config
export const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., "Gmail", "Yahoo", "Mailgun", etc.
  auth: {
    user: process.env.EMAIL_USER,  // Make sure to use environment variables for sensitive data
    pass: process.env.EMAIL_PASS,  // Example: process.env.EMAIL_PASS
  },
});

export const mailOptions = {
  from: process.env.EMAIL_USER,  // Your email
  to: process.env.EMAIL_RECIPIENT,  // Recipient email (e.g., your email)
};
