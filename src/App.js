import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
