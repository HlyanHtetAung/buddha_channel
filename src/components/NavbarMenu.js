import "../styles/NavbarMenu.css";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import HomeIcon from "@material-ui/icons/Home";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useRef } from "react";
import NavbarMenuContent from "./NavbarMenuContent";
import { useHistory } from "react-router-dom";

function NavbarMenu({ showMenu, setShowMenu }) {
  const modalRef = useRef();
  const history = useHistory();
  const array1 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

  const closeModal = (e) => {
    modalRef.current === e.target && setShowMenu(false);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 1085 && setShowMenu(false);
  });

  return (
    <div
      className={showMenu ? "navbarMenu active" : "navbarMenu"}
      ref={modalRef}
      onClick={closeModal}
    >
      <div className="navbarMenu__inside">
        <div className="navbarMenu__header">
          <h1>Buddha</h1>
        </div>
        <NavbarMenuContent
          Icon={HomeIcon}
          title="Home"
          page="/"
          setShowMenu={setShowMenu}
          onClick={() => history.push("/")}
        />
        <NavbarMenuContent
          Icon={PermContactCalendarIcon}
          title="Contact Us"
          setShowMenu={setShowMenu}
          page="/contact"
          onClick={() => console.log("clicked")}
        />

        <div className="navbarMenu__categoriesDiv">
          <h3 className="navbarMenu__categoryHeader">
            Categories
            <span>
              <ArrowDropDownIcon />
            </span>
          </h3>
          <div className="navbarMenu__dropdownCategories">
            {array1.map((_, index) => (
              <p key={index}>Trending</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
