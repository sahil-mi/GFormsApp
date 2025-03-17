import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./pages/forms/forms";
import NewForms from "./pages/newForms/newForms";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forms />} />{" "}
        <Route path="/new/forms/" element={<NewForms />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
