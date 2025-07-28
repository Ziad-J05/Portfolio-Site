import './index.css'
import { Project, FeaturedProject } from './Project'


export default function ProjectSection(){
  return(
    <>
      <section id="projects" className="w-2xl mx-auto">
        <h2 className="text-5xl mb-[1rem]">Projects</h2>

        {/* Featured Project */}
        <FeaturedProject />

        {/* All Projects */}
        <Project />
        <Project />
        <Project />
        
      </section>
    </>
  )
}