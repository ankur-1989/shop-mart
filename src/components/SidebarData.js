import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GiIcons from "react-icons/gi"
import * as FcIcons from "react-icons/fc"
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "sb-nav-text",
  },
  {
    title: "Mobile Phones",
    path: { pathname: "/products", state: "mobile" },
    icon: <FaIcons.FaMobile />,
    cName: "sb-nav-text",
  },
  {
    title: "Clothes",
    path: { pathname: "/products", state: "clothes" },
    icon: <AiIcons.AiOutlineSkin />,
    cName: "sb-nav-text",
  },
  {
    title: "Shoes",
    path: { pathname: "/products", state: "shoes" },
    icon: <FaIcons.FaShoePrints />,
    cName: "sb-nav-text",
  },
  {
    title: "Electronics",
    path: { pathname: "/products", state: "electronics" },
    icon: <FcIcons.FcElectronics />,
    cName: "sb-nav-text",
  },
  {
    title: "Books",
    path: { pathname: "/products", state: "books" },
    icon: <GiIcons.GiBookshelf />,
    cName: "sb-nav-text",
  },
  {
    title: "Sports",
    path: { pathname: "/products", state: "sports" },
    icon: <FcIcons.FcSportsMode />,
    cName: "sb-nav-text",
  },
]
