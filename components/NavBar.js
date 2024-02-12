"use client";

import { Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import style from '../app/globals.css'

export default function DefaultNavbar() {
  return (
    <Navbar
      className="fixed top-0 left-0 right-0 bg-[#18191B] text-[20px] font-sans z-10"
      fluid
    >
      <Navbar.Brand className="lg:ml-32 ml-6" href="/">
        <span
          className="self-center whitespace-nowrap text-3xl font-semibold text-[#fabf68]"
          href="/"
        >
          HailAgi
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          <div className="flex justify-center items-center pt-2">
            <p className="text-[#ffe4cd] cursor-pointer text-[20px]  font-sans hover:underline hover:underline-offset-8 hover:decoration-2">
              Home
            </p>
          </div>
        </Navbar.Link>
        {/* <Navbar.Link href="/contact-us">
          <div className="flex justify-center items-center pt-2">
            <p className="text-[#ffe4cd] cursor-pointer text-[20px]  font-sans hover:underline hover:underline-offset-8 hover:decoration-2">
              Contact Us
            </p>
          </div>
        </Navbar.Link> */}
        <Navbar.Link href="/technologies">
          <div className="flex justify-center items-center pt-2">
            <p className="text-[#ffe4cd] cursor-pointer text-[20px]  font-sans hover:underline hover:underline-offset-8 hover:decoration-2">
              Technologies
            </p>
          </div>
        </Navbar.Link>
        <Navbar.Link href="/about">
          <div className="flex justify-center items-center pt-2">
            <p className="text-[#ffe4cd] cursor-pointer text-[20px]  font-sans hover:underline hover:underline-offset-8 hover:decoration-2">
              About
            </p>
          </div>
        </Navbar.Link>
        <Navbar.Link href="/contact">
          <div className="flex justify-center items-center pt-2">
            <p className="text-[#ffe4cd] cursor-pointer text-[20px]  font-sans hover:underline hover:underline-offset-8 hover:decoration-2">
              Contact us
            </p>
          </div>
        </Navbar.Link>
        <Navbar.Link href="https://platform.hailagi.com/welcome/register" className="text-center">
          <button className="cursor-pointer text-[15px] font-sans rounded-xl bg-[#FFDAA9] text-black border shadow shadow-[#D89153] hover:bg-[#ffa227] px-2 py-2">
            Getting Started
          </button>
        </Navbar.Link>
        
      </Navbar.Collapse>
      <Navbar.Toggle />
    </Navbar>
  );
}
