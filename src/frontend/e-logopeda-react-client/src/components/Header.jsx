import "../styles/main-styles.css";
import "../styles/header-styles.css";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaAddressBook,
} from "react-icons/fa";

export const Header = (props) => {
  const checkUserLogInState = () => {
    if (!props.userLogInState) {
      return (
        <div className="header__unregistered-user">
          <button className="header__btn">
            <FaUserPlus /> Rejestracja
          </button>
          <button className="header__btn">
            <FaSignInAlt /> Logowanie
          </button>
        </div>
      );
    } else if (!!props.userLogInState) {
      return (
        <div className="header__registered-user">
          <button className="header__btn">
            <FaAddressBook /> Profil
          </button>
          <button className="header__btn">
            <FaSignOutAlt /> Wyloguj się
          </button>
        </div>
      );
    }
  };

  return (
    <div className="header">
      <div></div>
      {checkUserLogInState()}
    </div>
  );
};
