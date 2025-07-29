import './index.css'
import { Project, FeaturedProject, ProjectInfo } from './Project'

export default function ProjectArea({projectInfoList}: {projectInfoList: ProjectInfo[]}){
    const projects: React.ReactElement[] = [];
    
    for(const projectData of projectInfoList) {
        projects.push(<Project projectInfo={projectData} />)
    }
    
    return( 
        <>
            {projects}
        </>
    )
}