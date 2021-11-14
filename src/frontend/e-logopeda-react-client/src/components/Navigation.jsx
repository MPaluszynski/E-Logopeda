import '../styles/main-styles.css';
import '../styles/navigation-styles.css';
import { /* Router, */ Link } from "react-router-dom";
// import { RiUserVoiceFill } from "react-icons/ri";

export const Navigation = (props) => {

  const renderedArray = props.excArray.map(
    (ex) => {
      return (
        <Link className="navigation__link" to="exercise">
          <div className="navigation__btn">
            {ex.title}
          </div>
        </Link>
      )
    }
  )
    return (
        <div className="navigation">
          <div className="navigation__logo">E-Logopeda</div>
          <div className="navigation__btn--container">
          <Link className="navigation__link" to="/">
            <div className="navigation__btn">Instrukcja</div>
          </Link>
            {renderedArray}          
          </div>
          <div className="navigation__footer">
          </div>
        </div>
      );
}