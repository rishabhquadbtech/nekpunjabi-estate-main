export const sendContactForm = async (data) => {
  const { name, phone, location, recaptchaToken = null } = data;

  const requestData = { name, phone, location, recaptchaToken };

  return fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to send message');
    }
    return res.json();
  });
};
