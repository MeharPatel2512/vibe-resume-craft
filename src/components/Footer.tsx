
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-resume-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <h2 className="text-3xl font-bold text-white">
                Vibe<span className="text-resume-primary">Resume</span>
              </h2>
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Create stunning, professional resumes in minutes with our easy-to-use
              builder. Stand out from the crowd and land your dream job.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-resume-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/builder" className="text-gray-300 hover:text-resume-primary transition-colors">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-resume-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-resume-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-semibold">Email:</span> support@vibeResume.com
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Address:</span> 123 Resume St, San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:flex md:justify-between">
          <p className="text-gray-400">
            © {new Date().getFullYear()} VibeResume. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-resume-primary mx-2 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-resume-primary mx-2 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
