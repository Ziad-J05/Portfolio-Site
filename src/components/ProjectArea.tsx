import '../index.css'
import { ProjectThumbnail } from './ProjectThumbnails'
import { ProjectData } from './ProjectData';

export function ProjectFlex({projectDataList}: {projectDataList: ProjectData[]}){
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
        <div className="grid grid-cols-2 py-2 gap-4">
            {projects}
        </div>
        </>
    )
}