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
      "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      "children": "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        "off": "flex-col",
        "on": "flex-col md:max-w-2xl md:flex-row"
      },
      "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    img: {
      "base": "",
      horizontal: {
        off: "rounded-t-lg h-64 object-cover",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
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
                <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {projectInfo.name}
                    </h3>
                    <p className="text-2xl text-gray-700 dark:text-gray-400 mb-0">
                        {projectInfo.role}
                    </p>
                </div>

                <div className="flex gap-2 my-0.5">
                    <SkillsArea skills={projectInfo.skills} />
                </div>
                
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {projectInfo.body}
                </p>
                <a className="hover:underline" href={projectInfo.link}>More info</a>
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
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {projectInfo.name}
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-400 mb-0">
                    {projectInfo.role}
                </p>
                <div className="flex gap-2 my-0.5">
                    <SkillsArea skills={projectInfo.skills} />
                </div>
                <a className="hover:underline" href={projectInfo.link}>More info</a>
                </div>
            </Card>
        </ThemeProvider>
        </>
    )
}