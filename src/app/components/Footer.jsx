import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white px-4 md:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src="/neklogo.png" alt="Nek Punjab Estate" className="w-24" />
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-300">
          <a href="#"><FaFacebookF className="hover:text-white" /></a>
          <a href="#"><FaInstagram className="hover:text-white" /></a>
          <a href="#"><FaXTwitter className="hover:text-white" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
          <a href="#"><FaYoutube className="hover:text-white" /></a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-400">
        <p>© 2025 Nek Punjabi. All rights reserved. &nbsp; | &nbsp;
          <a href="#" className="hover:text-white">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
