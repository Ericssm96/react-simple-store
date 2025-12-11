import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router';
import { NavLinks } from './NavLinks';
import { useEffect, useState } from 'react';

const themes = {
  acid: "acid",
  dim: "dim"
}

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.acid;
}

export const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(theme === "dim");
  

  const handleTheme = () => {
    const newTheme = theme === themes.acid ? themes.dim : themes.acid;
    
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setIsDarkThemeActive(theme === "dim");
  }, [theme])

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink className="hidden lg:flex btn btn-primary text-2xl items-center">
            Comfy
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="">
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SELECTOR */}
          <label className="swap swap-rotate">
            <input type="checkbox" checked={!isDarkThemeActive} onChange={handleTheme} />

            <BsMoonFill className="swap-on h-4 w-4" />
            <BsSunFill className="swap-off h-4 w-4" />
          </label>
          {/* CART ITEMS AMMOUNT */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className='h-6 w-6' />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}


{/* <div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
  </div>
  <ul
    tabIndex="-1"
    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li>
      <a>Parent</a>
      <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</div> */}