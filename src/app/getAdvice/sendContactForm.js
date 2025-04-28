export const sendContactForm = async (data, gRecaptchaToken = null) => {
  // Add reCAPTCHA token if present, or null if not
  const requestData = { ...data, gRecaptchaToken };

  return fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    console.log("sendContactForm error !!!❌❌❌❌❌❌❌❌❌❌❌❌❌❌")
    return res.json();
  });
};
