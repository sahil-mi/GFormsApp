import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Forms from "./pages/forms/forms";
import NewForms from "./pages/forms/forms";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Forms />} />{" "} */}
        <Route path="/" element={<NewForms />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
