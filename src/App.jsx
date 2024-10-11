import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
