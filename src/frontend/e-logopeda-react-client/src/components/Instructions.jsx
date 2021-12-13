import "../styles/main-styles.css";
import "../styles/instructions-styles.css";
import elephants from "./../icons/elephants-vector.svg";
import foxes from "./../icons/foxes-vector.svg";

export const Instructions = () => {
  return (
    <div className="instructions">
      <div className="instructions--icon left">
        <img
          src={elephants}
          alt="elephant"
          className="instructions--icon-height"
        ></img>
      </div>

      <div className="instructions--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>

      <div className="instructions--icon right">
        <img
          src={foxes}
          alt="foxes"
          className="instructions--icon-height"
        ></img>
      </div>
    </div>
  );
};
