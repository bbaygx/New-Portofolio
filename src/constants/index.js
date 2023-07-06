import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

import {SiNodedotjs,SiMongodb} from "react-icons/si"
import {BsFillShareFill,BsWhatsapp, BsInstagram,BsFillBoxFill,BsLinkedin,BsGithub} from "react-icons/bs"
import {FaTools} from "react-icons/fa"
import {BiSolidMessageSquareDetail,BiLogoTailwindCss,BiLogoReact} from "react-icons/bi"
import {TfiHtml5} from "react-icons/tfi"
import {GiTrophy} from "react-icons/gi"


export const profileMenu = [
  {
    id: "app",
    title : "App",
    color: "text-orange-600",
    icons : BsFillBoxFill
  },
  {
    id: "message",
    title : "Message",
    color: "text-blue-600",
    icons : BiSolidMessageSquareDetail
  },
  {
    id: "trophy",
    title : "Trophy",
    color: "text-yellow-500",
    icons : GiTrophy
  },
  {
    id: "share",
    title : "Share",
    color: "text-blue-600",
    icons : BsFillShareFill
  },


]

export const socialMedia = [

  {
      id: "whatapps",
      title: "Whatapps",
      color: "text-green-600",
      link: '+62-813-8095-2872',
      icons: BsWhatsapp
  },
  {
      id: "instagram",
      title: "Instagram",
      color: 'text-purple-600',
      link: '@bbaygx_',
      icons: BsInstagram
  },
  {
    id: "linkdin",
    title : "Linkdin",
    color: "text-blue-600",
    link: 'Bayu Putra Efendi',
    icons : BsLinkedin
  },
  {
    id: "github",
    title : "Github",
    color: "text-black",
    link: 'bbaygx',
    icons : BsGithub
  }
]

export const skills = [
  {
    id: "tailwind css",
    name: "Tailwind CSS",
    color: "text-blue-500",
    logo: BiLogoTailwindCss
  },
  {
    id: "react js",
    name: "React JS",
    color: "text-blue-600",
    logo: BiLogoReact
  },
  {
    id: "html",
    name: "HTML",
    color: "text-orange-500",
    logo: TfiHtml5
  },
  {
    id: "nodejs",
    name: "Node JS",
    color: "text-green-600",
    logo: SiNodedotjs
  },
  {
    id: "mongodb",
    name: "MongoDB",
    color: "text-green-600",
    logo: SiMongodb
  }
]

export const contact = [
  {
    id: "name",
    title: "FullName: ",
    value: "Bayu Putra Efendi"
  },
  {
    id: "phone",
    title: "Mobile: ",
    value: "+62-813-8095-2872"
  },
  {
    id: "location",
    title: "Location: ",
    value: "Jakarta, Indonesia"
  },
  {
    id: "email",
    title: "Email: ",
    value: "bayuputraefendi993@gmail.com"
  }
]


// article

import {BsFillFolderFill} from "react-icons/bs"
import {PiArticleNyTimesDuotone} from "react-icons/pi"

export const article = [
  {
    id: "folder",
    title: "Folder",
    color: "text-yellow-400",
    icons: BsFillFolderFill
  },
  {
    id: "article",
    title: "Article",
    color: "text-blue-600",
    icons: PiArticleNyTimesDuotone
  }
]