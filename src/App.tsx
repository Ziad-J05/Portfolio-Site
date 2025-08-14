import './index.css'
import {BrowserRouter, Routes, Route, ScrollRestoration} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import { CreateProjectInfoPages } from './pages/ProjectPage'
import { MyProjects } from './data/MyProjects'
import { ThemeProvider, createTheme } from 'flowbite-react'

function App() {

  return (
    <div className="font-(family-name:--body-font)">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        {CreateProjectInfoPages({projectDataList: MyProjects})}
      </Routes>
    </BrowserRouter>    
    </div>
  )
}

export default App
