import '../index.css'
import ContentContainer from './ContentContainer'
import { FeaturedProjectThumbnail } from './ProjectThumbnails'
import ProjectArea from './ProjectArea'
import { GetProjectPageLink, ProjectData } from './ProjectData'
import { LinkButton } from './LinkButton'
import { SectionHeading } from './Headings'

export default function ProjectSection({projectDataList}: {projectDataList: ProjectData[]}){

  const featuredProjectData = projectDataList[0]
  const body = featuredProjectData.description[0]

  return(
    <>
      <ContentContainer 
        content={[
          <SectionHeading text="Projects" />,
          <FeaturedProjectThumbnail 
            projectName={featuredProjectData.projectName} 
            role={featuredProjectData.role}
            skills={featuredProjectData.skills} 
            body={body}
            thumbnailSrc={featuredProjectData.thumbnailSrc}
          />,
          <ProjectArea projectDataList={projectDataList.slice(1)} />,
          <LinkButton text="All Projects" link="/projects" />,
        ]} 
        bottomMargin={true}
      />
    </>
  )
}