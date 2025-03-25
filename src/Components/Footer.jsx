import { FaFacebook, FaInstagram, FaTripadvisor, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 md:pt-12 pb-6 px-4 sm:px-6 border-t-4 border-amber-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8">
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-3 md:mb-4 flex justify-center sm:justify-start items-center">
              <span className="mr-2">🍴</span>
              Our Restaurant
            </h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              We serve the finest cuisine with premium ingredients at the best prices. Over 15 years of culinary experience.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-lg md:text-xl" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-lg md:text-xl" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-lg md:text-xl" aria-label="Tripadvisor">
                <FaTripadvisor />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 flex justify-center sm:justify-start items-center">
              <BsClock className="mr-2" />
              Opening Hours
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li className="flex justify-between max-w-xs mx-auto sm:mx-0">
                <span>Sun - Thu</span>
                <span className="text-amber-400 ml-4">10 AM - 12 AM</span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto sm:mx-0">
                <span>Fri - Sat</span>
                <span className="text-amber-400 ml-4">12 PM - 1 AM</span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto sm:mx-0">
                <span>Holidays</span>
                <span className="text-amber-400 ml-4">24 Hours</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors text-sm md:text-base block py-1">Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors text-sm md:text-base block py-1">Special Offers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors text-sm md:text-base block py-1">Book a Table</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors text-sm md:text-base block py-1">Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors text-sm md:text-base block py-1">Events</a></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li className="flex items-start justify-center sm:justify-start">
                <FaMapMarkerAlt className="text-amber-400 mr-2 mt-1 flex-shrink-0" />
                <span>123 Restaurant St, City</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <FaPhone className="text-amber-400 mr-2 flex-shrink-0" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <FaEnvelope className="text-amber-400 mr-2 flex-shrink-0" />
                <span>info@restaurant.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xs md:text-sm py-1">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xs md:text-sm py-1">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xs md:text-sm py-1">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;