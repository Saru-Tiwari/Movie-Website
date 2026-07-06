import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/layout/Layout";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Register from "./Pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Home />
    </>
  );
};

export default App;
