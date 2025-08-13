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
      <SectionHeading text="Projects" />
      <div className='flex gap-12'>
        
        <FeaturedProjectThumbnail 
          projectName={featuredProjectData.projectName} 
          role={featuredProjectData.role}
          skills={featuredProjectData.skills} 
          body={body}
          thumbnailSrc={featuredProjectData.thumbnailSrc}
        />
        <div className='w-xl flex gap-6 flex-col justify-center'>
          <div className="flex flex-col gap-6 w-full">
            <ProjectArea projectDataList={projectDataList.slice(1)} />
          </div>
          <LinkButton text="All Projects" link="/projects" />
        </div>

      </div>
      
    </>
  )
}