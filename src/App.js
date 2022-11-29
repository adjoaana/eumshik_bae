import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { About } from "./pages/About.page";
import { Home } from "./pages/Home.page";
import "./scss/style";

function App() {
  return (
    <div className="App">
      <DefaultLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deals" element={<Home />} />
        <Route path="/menus" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
