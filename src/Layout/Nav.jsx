import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
const image = '/src/assets/m logo.png'
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={handleMenu}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded={menu}
              >
                <span className="sr-only">Open main menu</span>
                {menu ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-between w-full">
              <Link to={'/'}>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src={image}
                    alt="Your Company"
                  />
                </div>
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <ul className="flex justify-between w-full">
                    <Link to={'/'}>
                      <li className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Home
                      </li>
                    </Link>
                    <Link to={'/projects'}>
                      <li className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Projects
                      </li>
                    </Link>
                    <Link to={'/contact'}>
                      <li className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Contact
                      </li>
                    </Link>
                    <Link to={'/about'}>
                      <li className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        About
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Additional elements (e.g., profile dropdown) can be added here */}
            </div>
          </div>
        </div>

        <div className={`sm:hidden ${menu ? "block absolute bg-gray-800 w-full z-50" : "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <ul className="flex flex-col">
              <Link to={'/'}>
                <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Home
                </li>
              </Link>
              <Link to={'/projects'}>
                <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Projects
                </li>
              </Link>
              <Link to={'/about'}>
                <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  About
                </li>
              </Link>
              <Link to={'/contact'}>
                <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
