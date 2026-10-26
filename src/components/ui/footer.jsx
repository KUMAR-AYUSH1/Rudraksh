import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Get In Touch",
      links: [
        { label: "+07405615964", href: "+07405615964" },
        { label:  "Rudraksh Health Care, Pillar No 25, Opposite Shiv Mandir, Nalanda Colony, Khajpura, Patna-800014, Bihar", href: "https://www.google.com/maps?rlz=1C1ONGR_enIN1041IN1041&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDzSAQc5NDRqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZ2aD4wgV-05MQPqr6DCIfKh&daddr=pillar+number+25,+opposite+Shiv+Mandir+Road,+Nalanda+Colony,+Khajpura,+Patna,+Bihar+800014" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Blog", href: "#" },
        { label: "Home", href: "/" },
        { label: "Contact", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Services", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: <FaInstagram/>, href: "" },
        { label: <FaFacebookF />, href: "" },
        { label: <FaYoutube/>, href: "" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        
        {/* Top Section: Links & Newsletter */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand/Logo Column */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
            <img src="/Logo.svg" alt="Rudraksh Logo" className="h-10 w-auto"/>
            </a>
            <p className="max-w-xs text-sm leading-relaxed">
                Dr Rajeev Ranjan is a Senior Consultant
            </p>
          </div>

          {/* Navigation Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="transition-colors hover:text-slate-900 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
          <p className="text-xs">
            &copy; {currentYear} Dr Rajeev Ranjan ( Rudraksh Health Care). All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Terms of Service</a>
            
            
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;