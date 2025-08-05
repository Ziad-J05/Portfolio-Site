import '../index.css'
import { 
  Card, 
  Badge,
  createTheme, 
  ThemeProvider 
} from "flowbite-react";
import { SkillsArea } from './SkillsArea';

export class ProjectInfo {
    name: string;
    role: string;
    skills: string[];
    link: string;
    img: string;

    constructor(name: string, role: string, skills: string[], link: string, img: string){
        this.name = name,
        this.role = role,
        this.skills = skills,
        this.link = link
        this.img = img;
    }
}

export class FeaturedProjectInfo extends ProjectInfo {
    body: string;

    constructor(name: string, role: string, skills: string[], link: string, img:string, body: string){
        super(name, role, skills, link, img);
        this.body = body;
    }
}

const cardTheme = createTheme({
  card: {
    root: {
      "base": "flex rounded-lg border-2 border-black shadow-none",
      "children": "flex h-full w-full flex-col justify-center gap-4 p-0",
      horizontal: {
        "off": "flex-col",
        "on": "flex-col md:max-w-2xl md:flex-row"
      },
      "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
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

export function FeaturedProject( {projectInfo}: {projectInfo: FeaturedProjectInfo} ){
    return(
        <>
        <ThemeProvider theme={cardTheme}>
            <Card
                className="max-w-2xl"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={projectInfo.img}
            >
                <div>
                <div className="flex items-baseline border-b-2">
                    <h3 className="text-3xl font-bold tracking-tight px-2 py-1 text-black">
                        {projectInfo.name}
                    </h3>
                    <div className="border-l-2 self-stretch"></div>
                    <p className="text-3xl text-black px-2 py-1 mb-0">
                        {projectInfo.role}
                    </p>
                </div>

                <div className="px-2 py-1">
                    <div className="flex gap-2 my-0.5">
                        <SkillsArea skills={projectInfo.skills} />
                    </div>
                    
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {projectInfo.body}
                    </p>
                    <a className="hover:underline" href={projectInfo.link}>More info</a>
                    </div>
                </div>
            </Card>
        </ThemeProvider>
        </>
    )
}



export function Project( {projectInfo}: {projectInfo: ProjectInfo} ){
    return(
        <>
        <ThemeProvider theme={cardTheme}>
            <Card
            className="max-w-2xl"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={projectInfo.img}
            horizontal
            >
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-black border-b-2 w-full px-2 py-1">
                        {projectInfo.name}
                    </h3>
                    <div className="px-2 py-1">
                        <p className="text-2xl text-black mb-0">
                            {projectInfo.role}
                        </p>
                        <div className="flex gap-2 my-0.5">
                            <SkillsArea skills={projectInfo.skills} />
                        </div>
                        <a className="hover:underline" href={projectInfo.link}>More info</a>
                    </div>
                </div>

            </Card>
        </ThemeProvider>
        </>
    )
}