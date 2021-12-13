import "../styles/main-styles.css";
import { Header } from "./Header.jsx";
import { Data } from "./Data.jsx";

export const Container = (props) => {
  return (
    <div className="container">
      <Header userLogInState={props.userLogInState}></Header>
      <Data></Data>
    </div>
  );
};
