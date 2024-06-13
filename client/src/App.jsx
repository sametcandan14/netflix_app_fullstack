import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/movies" element={<Home type="movies" />} />
      <Route path="/series" element={<Home type="series" />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}

export default App;
