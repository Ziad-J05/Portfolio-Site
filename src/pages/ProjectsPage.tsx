import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading } from '../components/Headings'
import ProjectArea from '../components/ProjectArea'
import { ProjectData } from '../components/ProjectData'
import Footer from '../components/Footer'
import { MySkills} from '../data/MySkills'
import { MyProjects } from '../data/MyProjects'

/*
const projectInfo:ProjectInfo[] = 
[
  new ProjectInfo("Eulyss", "Programmer", [MySkills.Unity, MySkills.CSharp], "/projects/project-info", "/placeholder-photo.jpg"),
  new ProjectInfo("Pokedex Search Website", "Solo Developer", [MySkills.HTML, MySkills.CSS, MySkills.JavaScript], "/projects/project-info", "/placeholder-photo.jpg"),
  new ProjectInfo("Impetus", "Programmer", [MySkills.Unity, MySkills.CSharp], "/projects/project-info", "/placeholder-photo.jpg"),
  new ProjectInfo("Space Trucker", "Solo Developer", [MySkills.HTML, MySkills.CSS, MySkills.JavaScript, MySkills.Monogame], "/projects/project-info", "/placeholder-photo.jpg"),
  new ProjectInfo("Gravity Game", "Solo Developer", [MySkills.CPlusPlus, MySkills.SFML, MySkills.Box2D], "/projects/project-info", "/placeholder-photo.jpg"),
  new ProjectInfo("Johnny Rocket", "Programmer", [MySkills.CSharp, MySkills.Monogame], "/projects/project-info", "/placeholder-photo.jpg"),
]
*/

/*
const featuredProjectInfo: FeaturedProjectInfo = new FeaturedProjectInfo(
  "Eulyss",
  "Programmer",
  [MySkills.Unity, MySkills.CSharp],
  "/projects/project-info",
  "/placeholder-photo.jpg",
  "Collaborated as part of a team of two to create an adventure game with a custom text parser that imports text files as graphs for in-game dialogue. Currently in development."
)
*/

export default function ProjectsPage() {

  return (
    <>
        <NavigationBar />
        <MainContentArea width='4xl' content={[
          <ContentContainer 
          content={[
            <SectionHeading text="All Projects" />,
            <ProjectArea projectDataList={MyProjects} />
          ]} 
          bottomMargin={false}
          />   
        ]} />
            
        <Footer />
    </>
  )
}