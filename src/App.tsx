import './index.css'
import {BrowserRouter, Routes, Route, ScrollRestoration} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import { CreateProjectInfoPages } from './pages/ProjectPage'
import { MyProjects } from './data/MyProjects'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        {CreateProjectInfoPages({projectDataList: MyProjects})}
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
