import '../index.css'
import ContentContainer from './ContentContainer'
import { FeaturedProjectThumbnail } from './ProjectThumbnails'
import { ProjectFlex } from './ProjectArea'
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
          <div className='w-fit mx-auto'>
          <FeaturedProjectThumbnail 
            projectName={featuredProjectData.projectName} 
            role={featuredProjectData.role}
            skills={featuredProjectData.skills} 
            body={body}
            thumbnailSrc={featuredProjectData.thumbnailSrc}
          />,
          </div>,
          <ProjectFlex projectDataList={projectDataList.slice(1)} />,
          <div className='w-fit mx-auto mt-8'>
            <LinkButton text="All Projects" link="/projects" />
          </div>
        ]} 
        bottomMargin={true}
        width="4xl"
      />
    </>
  )
}