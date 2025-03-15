import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaDownload, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    const darkMode = useSelector((store) => store.theme.darkMode);

    return (
        <div className={`${darkMode ? "bg-[#000000] text-light" : "bg-[#5080A8] text-dark"}`}>
            <footer className="border-t">
                <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-6">
                    <div className="md:flex md:justify-between items-center">
                        {/* Logo */}
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img
                                    src={`${darkMode ? "/logoFooterdark.png" : "/logoFooterlight.png"}`}
                                    className="mr-3 h-16"
                                    alt="Logo"
                                />
                            </Link>
                        </div>

                        {/* Contact & Resume Options */}
                        <div className="flex space-x-5">
                            <a href="tel:9330112587" className="text-gray-500 hover:scale-110">
                                <FiPhoneCall className="w-5 h-5 text-green-300" />
                            </a>
                            <a href="https://wa.me/9330112587" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:scale-110">
                                <FaWhatsapp className="w-5 h-5 text-green-300" />
                            </a>
                            <a href="/resume.pdf" download className="text-gray-500 hover:scale-110">
                                <FaDownload className="w-5 h-5 text-blue-300" />
                            </a>
                        </div>
                    </div>

                    <hr className="my-4 border-gray-200 sm:mx-auto" />

                    {/* Social Icons at the Bottom */}
                    <div className="flex justify-center space-x-5 mt-4">
                        {/* LeetCode Icon */}
                        <a href="https://leetcode.com/u/sidd_1708/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:scale-110">
                           <SiLeetcode className="w-5 h-5 text-white bg-black rounded-full"/>
                        </a>
                        <a href="https://www.instagram.com/s.i.d_roy_1708/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:scale-110">
                            <FaInstagram className="w-5 h-5 text-pink-500" />
                        </a>
                        <a href="https://github.com/sid0417" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:scale-110">
                            <FaGithub className="w-5 h-5 text-white bg-black rounded-full" />
                        </a>
                    </div>

                    {/* Copyright Text */}
                    <div className="text-center text-sm text-white mt-4">
                        © 2025 <a href="https://yourwebsite.com/" className="hover:underline">siddharthroy</a>. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
