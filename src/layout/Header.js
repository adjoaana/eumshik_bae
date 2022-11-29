import React, { useEffect, useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../assets/images/microchip-solid.svg";

export const Header = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("classname", ref.current.className);
    if (!ref.current.classList.contains("open")) {
      ref.current.classList.add("open");
    } else {
      ref.current.classList.remove("open");
    }
  }, []);
  const headerToggle = (e) => {
    if (!e.target.classList.contains("open")) {
      e.target.classList.add("open");
    } else {
      e.target.classList.remove("open");
    }
  };

  return (
    <div>
      <header className="header flex flex-ai-c flex-jc-sb">
        <div ref={ref} className=""></div>
        <nav className="nav">
          <div className="nav_logo">
            <img
              src={logo}
              alt=" Microchip header logo,Click to go back to Homepage"
              width="80px"
            />
            <div
              ref={ref}
              className="nav_toggle hide-for-desktop"
              onClick={headerToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="nav_menu hide-for-mobile ">
            <div className="nav_menu_links flex flex-ai=c flex-jc-sb">
              <ul>
                <CustomLink to="/" className="nav_menu_links_a">
                  Home
                </CustomLink>
              </ul>
              <ul>
                <CustomLink to="/about" className="nav_menu_links_a">
                  About
                </CustomLink>
              </ul>
              <ul>
                <CustomLink to="/deals" className="nav_menu_links_a">
                  Deals
                </CustomLink>
              </ul>
              <ul>
                <CustomLink to="/menus" className="nav_menu_links_a">
                  Menu
                </CustomLink>
              </ul>
              <ul></ul>
            </div>
          </div>
          <button className=" nav_button button hide-for-mobile">
            <CustomLink to="/">Order Online</CustomLink>
          </button>
        </nav>
        <div className="header_menu"></div>
      </header>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {" "}
        {children}
      </Link>
    </li>
  );
}
