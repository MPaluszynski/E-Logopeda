import { useState /*, useEffect*/ } from "react";
import { Navigation } from "./components/Navigation.jsx";
import { Container } from "./components/Container.jsx";
import { excArray } from "./data/arrays"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
const [userLogInState/*, setUserLogInState*/] = useState(false);
  return (
    <div className="app">
      <Router>
        <Navigation excArray={excArray}></Navigation>
        <Container userLogInState={userLogInState}></Container>
      </Router>
    </div>
  );
}

export default App;
