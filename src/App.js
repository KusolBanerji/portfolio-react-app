import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="blogs" element={<h1>Blogs</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
