import React from "react";
import { TbSend2 } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import '../app/globals.css'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-50 px-4 py-10 font-poppins">
      <div className="max-w-[1270px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Exclusive & Subscribe Section */}
        <div className="flex-1 max-w-[250px]">
          <h2 className="font-Inter font-bold text-[24px] mb-4">Exclusive</h2>
          <h3 className="font-medium text-[20px] mb-2">Subscribe</h3>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center bg-black border border-gray-50 rounded-[4px] h-[36px] overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-gray-50 placeholder-gray-50 px-2 text-xs outline-none flex-grow"
            />
            <button className="bg-gray-50 text-black px-2 py-1">
              <TbSend2 className="w-[16px] h-[16px]" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex-1 max-w-[250px]">
          <h2 className="text-[20px] font-medium mb-4">Support</h2>
          <p className="text-[16px] font-normal mb-2">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-[16px] font-normal mb-2">exclusive@gmail.com</p>
          <p className="text-[16px] font-normal">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex-1 max-w-[250px]">
          <h2 className="text-[20px] font-medium mb-4">Account</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-[16px] font-normal">
                My Account
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-normal">
                Login / Register
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-normal">
                Cart
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-normal">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-normal">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 max-w-[250px]">
          <h2 className="text-[20px] font-medium mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-[16px] font-normal">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-normal">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-normal">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-normal">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="flex-1 max-w-[250px]">
          <h2 className="text-[20px] font-medium mb-4">Download App</h2>
          <p className="text-[16px] font-normal mb-4">
            Save $3 with App New User Only
          </p>
          <div className="flex items-start mb-4">
            {/* QR Code */}
            <Image
              src="/Qrcode 1.png"
              alt="QR code for app download"
              width={60}
              height={60}
              className="mr-4"
            />
            <div>
              {/* Google Play Store */}
              <Image
                src="/GooglePlay.png"
                alt="Google Play Store"
                width={120}
                height={40}
                className="mb-2"
              />
              {/* App Store */}
              <Image
                src="/AppStore.png"
                alt="Apple App Store"
                width={120}
                height={40}
              />
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm">
        <p> Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;