import '../index.css'
import ContentContainer from './ContentContainer'
import {FeaturedProject, ProjectInfo, FeaturedProjectInfo } from './Project'
import ProjectArea from './ProjectArea'
import LinkButton from './LinkButton'
import { SectionHeading } from './Headings'

interface ProjectSectionProps {
  projectDataList: ProjectInfo[]
  featuredProjectData: FeaturedProjectInfo
}

export default function ProjectSection({projectDataList, featuredProjectData}: ProjectSectionProps){
  return(
    <>
      <ContentContainer 
        content={[
          <SectionHeading text="Projects" />,
          <FeaturedProject projectInfo={featuredProjectData}/>,
          <ProjectArea projectInfoList={projectDataList} />,
          <LinkButton text="All Projects" link="/projects" />,
        ]} 
        bottomMargin={true}
      />
    </>
  )
}