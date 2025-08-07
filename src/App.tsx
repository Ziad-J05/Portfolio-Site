import './index.css'
import {BrowserRouter, Routes, Route, ScrollRestoration} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ProjectInfoPage from './pages/ProjectInfoPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/projects/project-info" element={<ProjectInfoPage />}/>
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
