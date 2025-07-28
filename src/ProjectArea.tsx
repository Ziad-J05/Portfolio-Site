import './index.css'
import { Project, FeaturedProject, ProjectData } from './Project'

export default function ProjectArea({projectDataList}: {projectDataList: ProjectData[]}){
    const projects: React.ReactElement[] = [];
    
    for(const projectData of projectDataList) {
        projects.push(<Project projectData={projectData} />)
    }
    
    return( 
        <>
            {projects}
        </>
    )
}