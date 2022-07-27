import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './media_files/loading.gif'

const AboutMe = React.lazy(() => import("./components/AboutMe"))
const Contact = React.lazy(() => import("./components/Contact"))
const Home = React.lazy(() => import("./components/Home"))
const Layout = React.lazy(() => import("./components/Layout/Layout"))
const Projects = React.lazy(() => import("./components/Projects"))
const Resume = React.lazy(() => import("./components/Resume"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div Style="text-align:center;vertical-align:middle;width:30%;"><img src={Loading} alt="Loading..."/></div>}>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="resume" element={<Resume />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<h1>Error</h1>} />
            </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
