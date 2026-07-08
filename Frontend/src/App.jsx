import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/layout/Layout";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Movies from "./Pages/Movies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
