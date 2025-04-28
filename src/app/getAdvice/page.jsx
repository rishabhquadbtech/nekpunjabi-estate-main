import GoogleCaptchaWrapper from '../GoogleRecaptcha';
import ContactForm from './ContactForm';

export default function Page() {
  return (
    <GoogleCaptchaWrapper>
      <ContactForm />
    </GoogleCaptchaWrapper>
  );
}
