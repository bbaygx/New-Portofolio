import React from "react";
import { NavLink } from "react-router-dom";
import {BiLogoTailwindCss} from "react-icons/bi"
import { curved_0, my_profiles } from "../assets";


// constans
import { profileMenu, socialMedia, skills, contact } from "../constants";

// styles
import styles from "../style.js";
import Nav from "./Nav";

const Main = () => {
  return (
    <div className=" md:ml-64 duration-200">
      <div className="border-gray-200 p-2">
        <div
          className="overlay relative flex bg-slate-500 rounded-xl h-72 bg-cover bg-center"
          style={{ backgroundImage: `url(${curved_0})` }}
        >
          {/* add gradient from overlay */}
          <span className="absolute inset-y-0 w-full h-full bg-center rounded-xl bg-cover bg-gradient-to-tl from-purple-700 to-pink-600 opacity-60"></span>

          <Nav />

          <div className="absolute flex flex-wrap justify-center w-full -bottom-96 min-[512px]:-bottom-32 sm:-bottom-32">
            <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 rounded-2xl bg-white/80 bg-clip-border backdrop-blur-3xl shadow-md backdrop-saturate-200">
              <div className="flex justify-between flex-wrap -mx-3 ">
                <div className="flex flex-wrap sm:flex max-[407px]:justify-center ">
                  <div className="flex-none w-auto max-w-full px-3">
                    <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                      <img
                        src={my_profiles}
                        className="w-24 h-24 shadow-soft-sm rounded-xl"
                        alt="gambar_profile"
                      />
                    </div>
                  </div>
                  <div className="flex-none w-auto max-w-full px-2 my-auto">
                    <div className="h-full">
                      <h5 className="mb-1 font-semibold text-xl text-slate-600 max-[407px]:ml-3 ">
                        Bayu Putra Efendi
                      </h5>
                      <p className="mb-0 font-semibold leading-normal text-sm text-slate-500 max-[407px]:ml-3">
                        FrontEnd Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5 sm:mx-20 md:mx-28">
                  <ul className="flex flex-wrap min-[512px]:flex-nowrap sm:flex-nowrap justify-between px-3 gap-3 ">
                    {profileMenu.map((item) => (
                      <li
                        className="bg-yellow-50 cursor-pointer w-full py-3 hover:bg-white ease-in-out duration-200 text-center px-5 rounded-xl"
                        key={item.id}
                      >
                        {
                          <item.icons className={`text-xl mx-auto ${item.color}`} />
                        }
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="card grid gap-3 grid-flow-col max-sm:grid-flow-row-dense max-[768px]:mt-32 max-ss:mt-28 max-[505px]:mt-72 max-[410px]:mt-80 max-xs:mt-72 sm:mt-32 mt-96 px-6">
          <div className="card-item py-3 px-5 shadow-md rounded-md">
            <h1 className="text-lg font-medium">Social Media</h1>
            <ul className="py-3">

              {
                socialMedia.map(item => (
                  <li className="flex items-center gap-3 pt-6" key={item.id}>
                  {<item.icons className={`text-2xl duration-200 hover:${item.color} ${item.color}`}/>}
                  <a className="text-base text-gray-700 font-medium">{item.title} :</a>
                  <a href="" className="text-sm font-normal text-gray-700">{item.link}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="card-item py-3 px-5 shadow-md rounded-md">
            <h1 className="text-lg font-medium">Profile Information</h1>
            <p className="py-6 text-sm text-gray-700">As a frontend web developer, I have the ability to transform visual designs into interactive and responsive websites. I have in-depth knowledge of programming languages such as HTML, CSS, and JavaScript, as well as the ability to use various tools such as Material UI, React JS, REST API, and Tailwind CSS.</p>
            <p className="text-sm text-gray-700">
I have the ability to work closely with a team of developers and designers, as well as the ability to keep up with the latest trends in web design and technology. I also have the ability to troubleshoot quickly and effectively, as well as the ability to test and improve my own code.
            </p>
<p className="pt-3 text-sm text-gray-700">
With my skills and experience as a frontend web developer, I can help companies or organizations create engaging and intuitive web experiences for their users. I can also help improve a company's reputation through a professional and innovative website.
</p>
            {
              contact.map(item =>(
                <span className="flex mt-5 gap-3" key={item.id}>
                <h1 className="font-semibold max-xs:font-medium max-[400px]:text-sm">{item.title}</h1>
                <p>{item.value}</p>
              </span>
              ))
            }
          </div>
          <div className="card-item max-ss:mt-32 py-5 px-5 shadow-md rounded-md max-sm:-order-2">
            <h1 className="text-lg font-medium">Skills</h1>
            <div className="skill-item mt-6 max-sm:flex max-sm:justify-center max-sm:gap-8">
              {
                skills.map(item => (
                  <span>
                  <item.logo className={`mx-auto mt-5 ${item.color} mb-3 text-4xl`} key={item.id}/>
                  <p className="text-sm text-center text-gray-700">{item.name}</p>
                </span>
                ))
              }
            </div>
          </div>
      </div>
    </div>
  );
};

export default Main;
