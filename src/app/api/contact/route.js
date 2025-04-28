import axios from 'axios';
import { mailOptions } from '@/app/config/nodemailerManager';
import { transporter } from '@/app/config/nodemailerManager';

 // Update with correct path if needed

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  number: "Phone Number",
  location: "Location",
};

// Helper function to generate email content
const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n\n`),
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
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
        body { font-family: Arial, sans-serif; }
        .form-container { padding: 20px; border: 1px dashed #ccc; }
        .form-heading { font-size: 18px; margin-bottom: 5px; }
        .form-answer { margin-bottom: 20px; }
      </style></head><body>
        <h2>New Contact Message</h2>
        <div class="form-container">${htmlData}</div>
      </body></html>`,
  };
};

// API Route to handle the POST request for the contact form
const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Bad request" });
  }

  const data = req.body;
  const { gRecaptchaToken } = data;

  // Ensure all fields are filled
  if (!data.name || !data.phone || !data.location) {
    return res.status(400).json({ message: "All fields are required when reCAPTCHA token is present" });
  }

  // If reCAPTCHA token is provided and name/location are filled, verify it
  if (gRecaptchaToken) {
    try {
      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gRecaptchaToken}`
      );

      // If reCAPTCHA verification fails, return error
      if (!recaptchaResponse.data.success || recaptchaResponse.data.score < 0.5) {
        return res.status(400).json({ message: "reCAPTCHA verification failed" });
      }
    } catch (err) {
      console.log("route.jsx !!!❌❌❌❌❌❌❌❌❌❌❌❌❌❌")
      return res.status(500).json({ message: "Error verifying reCAPTCHA", error: err.message });
    }
  }

  // Send the email only if reCAPTCHA is verified successfully or not required
  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "New Contact Form Submission",
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    console.log("rout.jsx after verifying captcha !!!❌❌❌❌❌❌❌❌❌❌❌❌❌❌")
    return res.status(500).json({ message: "Email failed to send", error: err.message });
  }
};

export default handler;
