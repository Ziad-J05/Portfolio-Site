import '../index.css'
import ContentContainer from './ContentContainer'
import { FeaturedProjectThumbnail } from './ProjectThumbnails'
import ProjectArea from './ProjectArea'
import { GetProjectPageLink, ProjectData } from './ProjectData'
import { LinkButton } from './LinkButton'
import { SectionHeading } from './Headings'
import { ReactElement } from 'react'

export default function ProjectSection({projectDataList}: {projectDataList: ProjectData[]}){


  const featuredProjectThumbnails: ReactElement[] = 
    projectDataList.map((peojectData) => 
      <FeaturedProjectThumbnail 
        projectName={peojectData.projectName} 
        role={peojectData.role}
        skills={peojectData.skills} 
        body={peojectData.description[0]}
        thumbnailSrc={peojectData.thumbnailSrc}
      />)

  return(
    <>
      <SectionHeading text="Projects" />
      <div className='flex gap-12 mx-auto flex-wrap w-full justify-center-safe'>
        
        
      {featuredProjectThumbnails}

      <div className='w-full lg:w-lg flex justify-center content-center items-center-safe'>
        <LinkButton text="All Projects" link="/projects" arrow/>
      </div>
      

      </div>

      
      
    </>
  )
}