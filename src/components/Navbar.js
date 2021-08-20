import "../styles/Navbar.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useRef, useState } from "react";
import NavbarMenu from "./NavbarMenu";

import { useHistory } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const logoRef = useRef();
  const inputRef = useRef();
  const array1 = [1, 3, 4, 5, 6, 7];

  const routeHomePage = (e) => {
    e.target === logoRef.current && history.push("/");
  };

  const searchVideo = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="navbar">
      <NavbarMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <h1 className="navbar__logo" ref={logoRef} onClick={routeHomePage}>
                    <span
          className="navbar__hamburgerIcon"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <MenuSharpIcon />
        </span>
        Buddha Channel
      </h1>
      <div className="navbar__right">
        <form className="navbar__searchBar" onSubmit={searchVideo}>
          <div className="navbar__searchIconDiv">
            <SearchSharpIcon className="navbar_searchIcon" />
          </div>
          <input ref={inputRef} type="text" placeholder="Search here..." />
        </form>
        <div className="navbar__right__header">
          <h3>
            <a href="/">About</a>
          </h3>
        </div>
        <div className="navbar__right__header">
          <h3 onClick={() => history.push("/contact")}>Contact Us</h3>
        </div>

        <div className="dropdown">
          <h3 className="navbar__categories">
            <span>
              <ArrowDropDownIcon />
            </span>
            Categories
          </h3>
          <div className="dropdown__content">
            {array1.map((_, index) => (
              <p key={index}>Latest</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
