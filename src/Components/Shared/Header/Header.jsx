import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { List, ArrowRight } from "react-bootstrap-icons";
import Drawer from "../Drawer/Drawer";
import logo from "../../../assets/img/logo/logo.png";
//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../Redux/themeSlice";
import ColorPicker from "../../ColorPicker/ColorPicker";

const menuList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/",
    section: "#about",
    name: "About",
  },
  {
    id: 3,
    path: "/",
    section: "#projects",
    name: "Portfolio",
  },
  {
    id: 4,
    path: "/",
    section: "#founder",
    name: "Team",
    dropDown: [
      {
        id: 1,
        path: "/all-services",
        name: "Core Team",
      },
      {
        id: 2,
        path: "/service-details",
        name: "Dev Ops",
      },
    ],
  },
  {
    id: 5,
    path: "/",
    section: "#testimonial",
    name: "Testimonial",
  },
  {
    id: 6,
    path: "/",
    section: "#blog",
    name: "Resources",
    dropDown: [
      {
        id: 1,
        path: "/all-blog",
        name: "Events",
      },
      {
        id: 2,
        path: "/blog-details",
        name: "News",
      },
    ],
  },
  {
    id: 7,
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [dropDownId, setDropDownId] = useState(null);
  const theme = useSelector((state) => state.theme.theme); // Get the theme from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    // Set the theme class on the body when theme changes
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [theme]);

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 35
      ? header.classList.add("menu-fixed", "animated", "fadeInDown")
      : header.classList.remove("menu-fixed");
  };

  const handleHeaderToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleSubMenu = (id) => {
    setDropDownId(id);
  };

  const handleToggle = () => {
    dispatch(toggleTheme()); // Dispatch the toggle action
  };

  return (
    <header className={`header-section`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="main__logo">
            <Link to={"/"} className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={`main-menu ${menuActive ? "active" : ""}`}>
            {menuList.map(({ id, name, path, dropDown, section }) => (
              <li key={id} onClick={() => handleSubMenu(id)}>
                <HashLink smooth to={`${path}${section ? section : ""}`}>
                  {name}
                </HashLink>
                {dropDown?.length && (
                  <ul className={`sub-menu ${dropDownId === id ? "sub-menu_active" : ""}`}>
                    {dropDown.map(({ id, name, path }) => (
                      <li key={id}>
                        <HashLink smooth to={path}>
                          {name}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="menu__components d-flex align-items-center">
            <button onClick={handleToggle} className="theme-toggle">
              {theme === 'dark' ? "Dark Mode" : "Light Mode"}
            </button>
            <Link
              to="/contact"
              className="d-flex fw-500 cmn--btn align-items-center gap-2"
            >
              <span className="get__text">Apply</span>
              <span>
                <ArrowRight className="fz-20" />
              </span>
            </Link>
            <div
              onClick={handleHeaderToggle}
              className={`header-bar d-lg-none ${menuActive ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setIsSidebarActive(true)}
              className="remove__click"
            >
              <List className="icon" />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setIsSidebarActive}
      />

      {/* Render ColorPicker outside the header */}
      <ColorPicker />
    </header>
  );
};

export default Header;
