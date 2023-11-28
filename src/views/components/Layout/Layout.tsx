import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    if (showMenu) setShowMenu(false);
  };

  return (
    <div className="bg-slate-900 h-full text-slate-50">
      <header className="w-full bg-slate-950 text-slate-50 sticky top-0 left-0 z-50">
        <div className="container py-5 flex items-center">
          <div className="flex items-center">
            <div className="cursor-pointer" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </div>
            <div className="ml-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              <NavLink to="/" onClick={hideMenu}>
                AniQuick
              </NavLink>
            </div>
          </div>
          <div></div>
        </div>
      </header>
      <nav
        className={`h-full fixed top-0 left-0 bg-slate-950 z-40 transition-transform duration-700 lg:w-[50%] w-full pt-20 text-slate-50
        ${showMenu ? 'translate-x-0' : 'translate-x-[-100%]'}`}
      >
        <div className="h-full flex flex-col text-xl">
          <NavLink onClick={hideMenu} to="/anime" className="menu-link">
            Аниме
          </NavLink>
          <NavLink onClick={hideMenu} to="/genres" className="menu-link">
            Жанры
          </NavLink>
          <NavLink onClick={hideMenu} to="/franchises" className="menu-link">
            Франшизы
          </NavLink>
        </div>
      </nav>
      <div
        className={`container ${
          showMenu
            ? 'blur-sm pointer-events-none'
            : 'filter-none pointer-events-auto'
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};
