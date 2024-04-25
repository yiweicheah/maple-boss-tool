import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/notifications/styles.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <div className="App">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/maple-boss-tool.appspot.com/o/images%2Fbackground%2Ffull-moon-maplestory-4s6k1cntl6b37k0x.jpg?alt=media&token=378817e9-9886-4941-ad56-e388acbdf755"
        alt="bg"
        className="app-bg"
      />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
