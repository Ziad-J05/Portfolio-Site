import './index.css'
import {BrowserRouter, Routes, Route, ScrollRestoration} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import { ProjectInfoPage } from './pages/ProjectInfoPage'

const captionedImages: Record<string, string>= {
  "/placeholder-photo.jpg": "This is a description. Hello!"
}

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/projects/project-info" element={<ProjectInfoPage
          projectName='Sample Name'
          companyName='Sample company name' 
          description={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus molestie, rhoncus ipsum ut, convallis mauris. Pellentesque sed dignissim sem, eget commodo ante. Donec ligula mi, sollicitudin non nulla a, porttitor ultrices orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus sed ligula a ornare. Vestibulum vehicula accumsan ante, id feugiat est fringilla at. Phasellus ullamcorper sodales augue, et malesuada mi. ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus molestie, rhoncus ipsum ut, convallis mauris. Pellentesque sed dignissim sem, eget commodo ante. Donec ligula mi, sollicitudin non nulla a, porttitor ultrices orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus sed ligula a ornare. Vestibulum vehicula accumsan ante, id feugiat est fringilla at. Phasellus ullamcorper sodales augue, et malesuada mi. ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus molestie, rhoncus ipsum ut, convallis mauris. Pellentesque sed dignissim sem, eget commodo ante. Donec ligula mi, sollicitudin non nulla a, porttitor ultrices orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus sed ligula a ornare. Vestibulum vehicula accumsan ante, id feugiat est fringilla at. Phasellus ullamcorper sodales augue, et malesuada mi. ',
          ]}
          projectLink='#' 
          githubLink='#' 
          processImages={{
            "/placeholder-photo.jpg": "This is a description. Hello!",
            "https://www.josephfiler.com/images/600/Arizona-Desert-Mountains-2518-Edit.jpg": "This is another description. Hello!"
          }}
        
        
        />}/>
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
