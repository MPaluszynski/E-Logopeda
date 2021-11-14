import { useState /*, useEffect*/ } from "react";
import { Navigation } from "./components/Navigation.jsx";
import { Container } from "./components/Container.jsx";
import { excArray } from "./data/arrays"

function App() {
const [userLogInState/*, setUserLogInState*/] = useState(false);
  return (
    <div className="app">
      <Navigation excArray={excArray}></Navigation>
      <Container userLogInState={userLogInState}></Container>
    </div>
  );
}

export default App;
