import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" border-t-2 text-slate-600 flex  justify-center items-center h-screen w-screen">
      <div className=" w-1/5 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="h-10 " />
          <span className="font-semibold">Notion</span>
        </div>
        <div className="flex  p-2 w-full justify-evenly">
          <FaInstagramSquare />
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaYoutube />
        </div>
        <div>
          <select className="p-2 border-2">
            <option>English</option>
            <option>German</option>
            <option>French</option>
          </select>
        </div>
      </div>
      <div className=" w-1/4 ">
        <div className="flex flex-col justify-center">
          <h2 className="text-start font-semibold  text-slate-900">Product</h2>
          <ul className="list-none flex flex-col justify-center text-start">
            <li>Wikis</li>
            <li>Projects</li>
            <li>Docs</li>
            <li>Notion AI</li>
            <li>What's new</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-start font-semibold text-slate-900">
            Solutions
          </h2>
          <ul className="list-none flex flex-col justify-center text-start">
            <li>Enterprise</li>
            <li>Small business</li>
            <li>Personal use</li>
            <li>Remote Work</li>
            <li>Startups</li>
            <li>Education</li>
            <li>Nonprofits</li>
            <li>Engineering</li>
            <li>Design</li>
            <li>Managers</li>
          </ul>
        </div>
      </div>
      <div className=" w-1/4 ">
        <div className="flex flex-col justify-center">
          <h2 className=" font-semibold  text-slate-900 text-start">
            Download
          </h2>
          <ul className="list-none flex flex-col justify-center text-start">
            <li>iOS & Android</li>
            <li>Mac & Windows</li>
            <li>Web cliper</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-start font-semibold text-slate-900">Build</h2>
          <ul className="list-none flex flex-col justify-center text-start">
            <li>Integrations</li>
            <li>Templates</li>
            <li>API docs</li>
            <li>Guides</li>
            <li>Hire a consultant</li>
            <li>Become an affilate</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-start font-semibold text-slate-900">Learn</h2>
          <ul className="list-none flex flex-col justify-center text-start">
            <li>Customer stories</li>
            <li>Help Center</li>
            <li>Webinars</li>
            <li>Blog</li>
            <li>community</li>
          </ul>
        </div>
      </div>
      <div className=" w-1/4 ">
        <div className="flex flex-col justify-center">
          <h2 className="text-start font-semibold  text-slate-900">
            Get started
          </h2>
          <ul className="list-none flex flex-col justify-center text-start">
            <li>Switch from confluence</li>
            <li>Switch from Asana</li>
            <li>Switch from evernote</li>
            <li>compare vs monday</li>
            <li>compare vs clickup</li>
            <li>compare vs jira</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-start font-semibold text-slate-900">
            Resources
          </h2>
          <ul className="list-none flex flex-col justify-center text-start">
            <li>Pricing</li>
            <li>About us</li>
            <li>careers</li>
            <li>Media kit</li>
            <li>Email us</li>
            <li>Security</li>
            <li>cookie settings</li>
            <li>Terms & conditions</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
