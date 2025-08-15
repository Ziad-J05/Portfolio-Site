import '../index.css'
import { 
  Card, 
  Badge,
  createTheme, 
  ThemeProvider 
} from "flowbite-react";
import { SkillsArea } from './SkillsArea';
import { Skill } from './Skill';
import { GetProjectPageLink, ProjectData } from './ProjectData';

interface ProjectThumbnailProps{
    projectName: string
    role: string
    skills: Skill[]
    thumbnailSrc: string
}

interface FeaturedProjectThumbnailProps extends ProjectThumbnailProps{
    body: string
}

export const cardTheme = createTheme({
  card: {
    root: {
      "base": "relative flex rounded-lg bg-white border-2 border-black shadow-[2px_4px_0px_-1px_rgba(0,0,0,1)] group",
      "children": "flex h-full w-full flex-col justify-center gap-4 p-0",
      horizontal: {
        "off": "max-w-lg flex-col",
        "on": "flex-col w-full md:max-w-full md:flex-row"
      },
      "href": "hover:shadow-[6px_8px_0px_-1px_rgba(0,0,0,1)] hover:-translate-[4px] hover:bg-white"
    },
    img: {
      "base": "",
      horizontal: {
        off: "rounded-t-md h-64 object-cover border-b-2",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-md border-r-2"
      }
    }
  }
});

export function FeaturedProjectThumbnail({projectName, role, skills, body, thumbnailSrc}: FeaturedProjectThumbnailProps){
    
    const projectPageLink = GetProjectPageLink(projectName)

    return(
        <>
        <ThemeProvider theme={cardTheme}>
            <Card
                href={projectPageLink}
                className="transition-all duration-150 ease-out"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={thumbnailSrc}
            >
                <div>
                    <div className="flex items-baseline border-b-2">
                        <h3 className="font-(family-name:--display-font) text-3xl font-semibold tracking-tight px-2 py-1 text-black">
                            {projectName}
                        </h3>
                        <div className="border-l-2 self-stretch" />
                        <p className="font-(family-name:--display-font) text-3xl text-black px-2 py-1 mb-0">
                            {role}
                        </p>
                    </div>

                    <div className="px-2 py-1">
                        <div className="flex gap-2 my-0.5">
                            <SkillsArea skills={skills} />
                        </div>
                        
                        <p className="font-normal text-black text-lg line-clamp-4">
                            {body}
                        </p>

                        <a href={projectPageLink} className='text-lg font-semibold text-gray-400 group-hover:text-black transition-all ease-out duration-150'>More info &rarr;</a>
                    </div>
                </div>
            </Card>
        </ThemeProvider>
        </>
    )
}



export function ProjectThumbnail( {projectName, role, skills, thumbnailSrc}: ProjectThumbnailProps ){

    const projectPageLink = GetProjectPageLink(projectName)

    return(
        <>
        <ThemeProvider theme={cardTheme}>
            <Card
            href={projectPageLink}
            className="transition-all duration-150 ease-out"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={thumbnailSrc}
            horizontal
            >
                <div>
                    <h3 className="font-(family-name:--display-font) text-2xl font-semibold tracking-tight text-black border-b-2 w-full px-2 py-1">
                        {projectName}
                    </h3>
                    <div className="px-2 py-1">

                        <div className="flex gap-2 my-0.5">
                            <SkillsArea skills={skills} />
                        </div>
                        <p className="font-(family-name:--display-font) text-xl text-black">
                            {role}
                        </p>
                        <a href={projectPageLink} className='text-lg font-semibold text-gray-400 group-hover:text-black transition-all ease-out duration-150'>More info &rarr;</a>
                    </div>
                </div>

            </Card>
        </ThemeProvider>
        </>
    )
}