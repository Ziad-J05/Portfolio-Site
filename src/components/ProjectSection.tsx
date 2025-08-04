import '../index.css'
import ContentContainer from './ContentContainer'
import {FeaturedProject, ProjectInfo, FeaturedProjectInfo } from './Project'
import ProjectArea from './ProjectArea'
import { Button } from 'flowbite-react'
import LinkButton from './LinkButton'

interface ProjectSectionProps {
  projectDataList: ProjectInfo[]
  featuredProjectData: FeaturedProjectInfo
}

export default function ProjectSection({projectDataList, featuredProjectData}: ProjectSectionProps){
  return(
    <>
      <ContentContainer 
        content={[
          <h2 className="text-5xl mb-[1rem]">Projects</h2>,
          <FeaturedProject projectInfo={featuredProjectData}/>,
          <ProjectArea projectInfoList={projectDataList} />,
          <LinkButton text="All Projects" link="/projects" />,
        ]} 
        bottomMargin={true}
      />
    </>
  )
}