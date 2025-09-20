import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-8 sm:pt-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Social Icons */}
          <div className="col-span-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-4">
              <Image src="/logos/b2b_logo.svg" alt="B2B Logo" width={100} height={100} className="w-20 h-20 sm:w-24 sm:h-24" />
            </div>
            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              <a href="https://www.youtube.com/@BridgetoBITS22" aria-label="YouTube" className="text-white hover:text-yellow-400 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.linkedin.com/company/bridge-to-bits/" aria-label="LinkedIn" className="text-white hover:text-yellow-400 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/bridgetobits" aria-label="Instagram" className="text-white hover:text-yellow-400 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4" style={{color: '#fac203'}}>About Us</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/about" className="hover:text-yellow-400 inline-block py-1 text-sm sm:text-base">Our Mission</Link></li>
                <li><Link href="/stories" className="hover:text-yellow-400 inline-block py-1 text-sm sm:text-base">Success Stories</Link></li>
                <li><Link href="/team" className="hover:text-yellow-400 inline-block py-1 text-sm sm:text-base">Our Team</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4" style={{color: '#fac203'}}>Contact Us</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/contact" className="hover:text-yellow-400 inline-block py-1 text-sm sm:text-base">Contact Form</Link></li>
                <li><p className="text-sm sm:text-base py-1 break-words">Email: <span className="text-yellow-400">bridgetobits@gmail.com</span></p></li>
              </ul>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4" style={{color: '#fac203'}}>Courses</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/Resources/Counselling" className="hover:text-yellow-400 inline-block py-1 text-sm sm:text-base">Counselling (coming soon)</Link></li>
                <li><Link href="/Resources/AutoCAD" className="hover:text-yellow-400 inline-block py-1 text-sm sm:text-base">AutoCAD Tutorials (coming soon)</Link></li>
                <li><Link href="/Resources/MatLab" className="hover:text-yellow-400 inline-block py-1 text-sm sm:text-base">MatLab Tutorials (coming soon)</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-400 border-t border-gray-700">
          © {new Date().getFullYear()} Bridge To BITS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
