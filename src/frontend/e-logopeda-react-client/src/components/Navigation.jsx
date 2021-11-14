import '../styles/main-styles.css';
import '../styles/navigation-styles.css';
// import { RiUserVoiceFill } from "react-icons/ri";

export const Navigation = (props) => {

  const renderedArray = props.excArray.map(
    (ex) => {
      return <div className="navigation__btn">{ex.title}</div>
    }
  )
    return (
        <div className="navigation">
          <div className="navigation__logo">E-Logopeda</div>
          <div className="navigation__btn--container">
            {renderedArray}
          </div>
          <div className="navigation__footer">
          </div>
        </div>
      );
}