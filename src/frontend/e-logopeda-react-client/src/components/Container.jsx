import '../styles/main-styles.css';
import { Header } from "./Header.jsx";
import { Data } from "./Data.jsx";

export const Container = () => {
    return (
        <div className="container">
          <Header></Header>
          <Data></Data>
        </div>
      );
}