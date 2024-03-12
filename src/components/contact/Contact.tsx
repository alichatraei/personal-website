"use client"
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn,FaGithub,FaTelegram } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="container w-full mx-auto px-4 lg:mx-auto flex items-center text-white my-6">
      <span className="w-fit text-sm lg:text-lg uppercase flex-1">Contact</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 lg:gap-y-0">
        <Link href="mailto:alichatraei@yahoo.com" target="_blank" className="border-2 border-white rounded-md px-4 py-2 flex items-center justify-around">
            <HiOutlineMail size={20} className="mr-2"/> Send an Email
        </Link>
        <Link href="https://www.linkedin.com/in/alichatraei" target="_blank" className="border-2 border-white rounded-md px-4 py-2 flex items-center justify-around">
            <FaLinkedinIn size={20} className="mr-2"/> Linkedin
        </Link>
        <Link href="https://www.github.com/alichatraei" target="_blank" className="border-2 border-white rounded-md px-4 py-2 flex items-center justify-around">
            <FaGithub size={20} className="mr-2"/> Github
        </Link>
        <Link href="https://www.t.me/alichatraei" target="_blank" className="border-2 border-white rounded-md px-4 py-2 flex items-center justify-around">
            <FaTelegram size={20} className="mr-2"/> Telegram
        </Link>
      </div>
    </section>
  );
};

export default Contact;
