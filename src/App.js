import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import About from "./components/About/About";
import Courses from "./components/courses/Courses";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./components/PageNotFound";
// import StudentCenter from "./components/StudentCenter";
import Login from "./components/Login/Login";
import Registation from "./components/registation/Registation";



function App() {
  return (
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/studentcenter" element={<PageNotFound />} />
            <Route path="/gallery" element={<PageNotFound />} />
            <Route path="/registration" element={<Registation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
