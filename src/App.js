import style from "./styles/App.module.scss";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterIntro from "./pages/RegisterIntro";
import Single from "./pages/Single";
import Write from "./pages/Write";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gallery/:id" element={<Gallery />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/write/:id" element={<Write />} />
          </Route>
          <Route path="/registerintro" element={<RegisterIntro />} />
          <Route path="/register/:id" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
