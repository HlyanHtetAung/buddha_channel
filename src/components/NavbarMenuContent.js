import { useHistory } from "react-router-dom";
import "../styles/NavbarMenuContent.css";

function NavbarMenuContent({ Icon, title, page, setShowMenu }) {
  const history = useHistory();

  const changePage = () => {
    history.push(page);
    setShowMenu(false);
  };

  return (
    <>
      <h3 className="navbarMenu__content" onClick={changePage}>
        <span className="navbarMenu__contentIcon">
          <Icon />
        </span>
        {title}
      </h3>
    </>
  );
}

export default NavbarMenuContent;
