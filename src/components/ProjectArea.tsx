import '../index.css'
import { ProjectThumbnail } from './ProjectThumbnails'
import { ProjectData } from './ProjectData';

export default function ProjectArea({projectDataList}: {projectDataList: ProjectData[]}){
    const projects: React.ReactElement[] = [];
    
    for(const projectData of projectDataList) {
        projects.push(<ProjectThumbnail 
            projectName={projectData.projectName} 
            role={projectData.role} 
            skills={projectData.skills} 
            thumbnailSrc={projectData.thumbnailSrc}/>)
    }
    
    return( 
        <>
            {projects}
        </>
    )
}