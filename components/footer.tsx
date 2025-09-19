import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Icons */}
          <div className="col-span-1">
            <Image src="/logos/b2b_logo.svg" alt="B2B Logo" width={100} height={100} style={{ marginTop: '-1rem' }} />
            <div className="flex space-x-4 mt-4">


              <a href="https://www.youtube.com/@BridgetoBITS22" aria-label="YouTube" className="text-white hover:text-yellow-400">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.linkedin.com/company/bridge-to-bits/" aria-label="LinkedIn" className="text-white hover:text-yellow-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/bridgetobits" aria-label="Instagram" className="text-white hover:text-yellow-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4" style={{color: '#fac203'}}>About Us</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-yellow-400">Our Mission</Link></li>
                <li><Link href="/stories" className="hover:text-yellow-400">Success Stories</Link></li>
                <li><Link href="/team" className="hover:text-yellow-400">Our Team</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4" style={{color: '#fac203'}}>Contact Us</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-yellow-400">Contact Form</Link></li>
                <li><p>Email: bridgetobits@gmail.com</p></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4" style={{color: '#fac203'}}>Courses</h3>
              <ul className="space-y-2">
                <li><Link href="/Resources/Counselling" className="hover:text-yellow-400">Counselling (coming soon)</Link></li>
                <li><Link href="/Resources/AutoCAD" className="hover:text-yellow-400">AutoCAD Tutorials (coming soon)</Link></li>
                <li><Link href="/Resources/MatLab" className="hover:text-yellow-400">MatLab Tutorials (coming soon)</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 py-6 text-center text-sm text-gray-400 border-t border-gray-700">
          © {new Date().getFullYear()} Bridge To BITS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
