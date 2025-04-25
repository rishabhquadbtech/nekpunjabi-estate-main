// src/app/api/contact/route.js

import { mailOptions, transporter } from "../../../config/nodemailer";  // Update with correct path if needed

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  number: "Phone Number",
  location: "Location",
};

// Helper function to generate email content
const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n\n`),
    ""
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `
      <h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3>
      <p class="form-answer" align="left">${val}</p>
    `);
  }, "");

  return {
    text: stringData,
    html: `
      <!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        body { font-family: Arial, sans-serif; }
        .form-container { padding: 20px; border: 1px dashed #ccc; }
        .form-heading { font-size: 18px; margin-bottom: 5px; }
        .form-answer { margin-bottom: 20px; }
      </style></head><body>
        <h2>New Contact Message</h2>
        <div class="form-container">${htmlData}</div>
      </body></html>
    `,
  };
};

// API Route to handle the POST request for the contact form
const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Bad request" });
  }

  const data = req.body;

  if (!data.name || !data.number || !data.location) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Send the email
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "New Contact Form Submission",
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ message: "Email failed to send", error: err.message });
  }
};

export default handler;
