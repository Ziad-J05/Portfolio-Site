import './index.css'
import { Project, FeaturedProject, ProjectInfo, FeaturedProjectInfo } from './Project'
import ProjectArea from './ProjectArea'

const projectDataList:ProjectInfo[] = 
[
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#")
]

const featuredProjectData: FeaturedProjectInfo = new FeaturedProjectInfo(
  "Pokedex Search Website",
  "Solo Developer",
  ["HTML", "CSS", "JavaScript"],
  "#",
  "Designed and developed a web app that retrieves and organizes information from PokeAPI, allowing users to search for their favorite monsters.")

export default function ProjectSection(){
  return(
    <>
      <section id="projects" className="w-2xl mx-auto">
        <h2 className="text-5xl mb-[1rem]">Projects</h2>

        {/* Featured Project */}
        <FeaturedProject projectInfo={featuredProjectData}/>

        {/* All Projects */}
        <ProjectArea projectInfoList={projectDataList} />
        
      </section>
    </>
  )
}