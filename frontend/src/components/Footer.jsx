import { FaFacebook, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute top-[180vw] w-full border-t border-gray-200 bg-white mt-auto">
      <div className="px-[5vw] py-[2vw] md:px-[4vw] lg:px-[6vw] md:py-[4vw]">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3vw] md:gap-[5vw] lg:gap-[4vw]">
          
          {/* Phone Section */}
          <div className="space-y-[1.5vw]">
            <h3 className="text-[3vw] md:text-[1.2vw] lg:text-[1.3vw] font-semibold text-gray-900 uppercase tracking-wide">
              Phone
            </h3>
            <p className="text-gray-600 text-[3.5vw] md:text-[1.2vw] lg:text-[1vw]">
              <a href="tel:+923341157497" className="hover:text-gray-900 transition-colors">
                +92 305 6404140
              </a>
            </p>
          </div>

          {/* Email Section */}
          <div className="space-y-[1.5vw]">
            <h3 className="text-[3vw] md:text-[1.8vw] lg:text-[1.3vw] font-semibold text-gray-900 uppercase tracking-wide">
              Email
            </h3>
            <p className="text-gray-600 text-[3.5vw] md:text-[1.2vw] lg:text-[1vw] break-all">
              <a href="mailto:mumarfarooq4140@gmail.com" className="hover:text-gray-900 transition-colors">
                mumarfarooq4140@gmail.com
              </a>
            </p>
          </div>

          {/* Social Section */}
          <div className="space-y-[1.5vw]">
            <h3 className="text-[3vw] md:text-[1.8vw] lg:text-[1.3vw] font-semibold text-gray-900 uppercase tracking-wide">
              Follow Me
            </h3>
            <div className="flex gap-[4vw] md:gap-[3vw] items-center">
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size="clamp(18px, 4vw, 24px)" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size="clamp(18px, 4vw, 24px)" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size="clamp(18px, 4vw, 24px)" />
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="space-y-[1vw] text-gray-600 text-[3.5vw] md:text-[1.2vw] lg:text-[1vw] md:text-right">
            <p>© 2025 Portfolio</p>
            <p className="flex items-center gap-[1vw] md:justify-end">
              Proudly created with 
              <FaHeart className="text-red-500 inline animate-pulse" size="clamp(10px, 2.5vw, 14px)" />
            </p>
          </div>
        </div>

        {/* Optional: Divider with extra info */}
        <div className="mt-[6vw] pt-[4vw] border-t border-gray-100 text-center text-gray-500 text-[3vw] md:text-[1vw]">
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;