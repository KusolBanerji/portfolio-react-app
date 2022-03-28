import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<h1>Blogs</h1>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
