import './index.css'
import {FeaturedProject, ProjectInfo, FeaturedProjectInfo } from './Project'
import ProjectArea from './ProjectArea'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

interface ProjectSectionProps {
  projectDataList: ProjectInfo[]
  featuredProjectData: FeaturedProjectInfo
}

export default function ProjectSection({projectDataList, featuredProjectData}: ProjectSectionProps){
  return(
    <>
      <section id="projects" className="w-2xl mx-auto">
        <h2 className="text-5xl mb-[1rem]">Projects</h2>

        {/* Featured Project */}
        <FeaturedProject projectInfo={featuredProjectData}/>

        {/* All Projects */}
        <ProjectArea projectInfoList={projectDataList} />
        
        <Button as="a" href="/projects" className='w-fit'>All Projects</Button>
      </section>
    </>
  )
}