import './index.css'
import {BrowserRouter, Routes, Route, ScrollRestoration} from 'react-router-dom'
import HomePage from './HomePage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
