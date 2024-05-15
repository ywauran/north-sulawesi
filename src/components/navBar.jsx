/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link
              to="/"
              className="block py-6 text-3xl font-black text-theme1 hover:text-theme2"
            >
              North Sulawesi
            </Link>
          </div>
          <div className="flex items-center px-4">
            <div className="absolute block right-4 lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#fafafa"
                onToggle={(toggled) => {
                  if (toggled) {
                    // open a menu
                    console.log(toggled);
                  } else {
                    // close a menu
                    console.log(toggled);
                  }
                }}
              />
            </div>
            <nav className={isOpen ? "navmenu-show" : "navmenu-hidden"}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    to="/"
                    className="flex py-2 mx-8 text-base font-bold text-theme1 group-hover:text-theme2"
                  >
                    Beranda
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/jelajah"
                    className="flex py-2 mx-8 text-base font-bold text-theme1 group-hover:text-theme2"
                  >
                    Jelajah
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/rekomendasi"
                    className="flex py-2 mx-8 text-base font-bold text-theme1 group-hover:text-theme2"
                  >
                    Rekomendasi
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
