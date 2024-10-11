import { Routes, Route, /*BrowserRouter*/ HashRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
