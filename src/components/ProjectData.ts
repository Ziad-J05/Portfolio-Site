import { Skill } from "./Skill"

export type ProcessImage = {
    source: string;
    caption: string;
}

export interface ProjectData{
    projectName: string
    companyName: string
    role: string
    skills: Skill[]
    description: string[]
    sampleLink: string
    githubLink: string
    thumbnailSrc: string
    processImages: ProcessImage[]
}

export function GetProjectPageLink(projectName: string){
    return ('/projects/' + projectName.toLowerCase().replace(/\s/g, "-"))
}
