import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";
import hamburger from "../assets/icons/hamburger.svg";

const Nav = () => {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="header logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray "
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <div className="max-lg:block hidden">
            <button
            style={{paddingLeft:'10px',paddingRight:"10px"}}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              class="inline-flex items-center text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-coral-red"
              type="button"
            >
              <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
            <section  style={{zIndex:"9999999" ,position:"relative"}}>
              <div
                style={{ textAlign: "center",position:"relative"}}
                id="dropdownDots"
                class="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-coral-red"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  
                </ul>
                <div class="py-2">
                  <a
                    href="/"
                    class="block px-4 py-2 text-sm text-gray-700   dark:text-gray-200 dark:hover:text-white"
                  >
                    <button className="button">
                      <a href="/">Login</a>
                    </button>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
