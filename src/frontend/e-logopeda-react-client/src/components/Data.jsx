import "../styles/main-styles.css";
import { Instructions } from "./Instructions.jsx";
import { Exercise } from "./Exercise";
import { Routes, Route } from "react-router-dom";

export const Data = () => {
  return (
    <div className="data">
      <Routes>
        <Route path="/" element={<Instructions />}></Route>
        <Route path="/exercise" element={<Exercise />}></Route>
      </Routes>
    </div>
  );
};
