import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5 fill-[#EFDADA]" />,
  },
  {
    path: "",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5 fill-[#EFDADA]" />,
  },
  {
    path: "",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5 fill-[#EFDADA]" />,
  },
  {
    path: "",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5 fill-[#EFDADA]" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10 bg-black">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright ©{year} developed by pumangKirange all right are
              reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#EFDADA] rounded-full flex items-center justify-center group hover:border-none hover:bg-primaryColor "
                >
                  {link.icon }
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                >
                  {item.display}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to: 
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                >
                  {item.display}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLinks03.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                >
                  {item.display}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
