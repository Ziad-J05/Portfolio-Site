import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading } from '../components/Headings'
import ProjectArea from '../components/ProjectArea'
import { ProjectInfo } from '../components/Project'
import Footer from '../components/Footer'
import { HighlightSkills, OtherSkills } from '../components/MySkills'

const projectInfo:ProjectInfo[] = 
[
  new ProjectInfo("Eulyss", "Programmer", [HighlightSkills.Unity, HighlightSkills.CSharp], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Pokedex Search Website", "Solo Developer", [HighlightSkills.HTML, HighlightSkills.CSS, HighlightSkills.JavaScript], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Impetus", "Programmer", [HighlightSkills.Unity, HighlightSkills.CSharp], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Space Trucker", "Solo Developer", [HighlightSkills.HTML, HighlightSkills.CSS, HighlightSkills.JavaScript, OtherSkills.Monogame], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Gravity Game", "Solo Developer", [HighlightSkills.CPlusPlus, OtherSkills.SFML, OtherSkills.Box2D], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Johnny Rocket", "Programmer", [HighlightSkills.CSharp, OtherSkills.Monogame], "#", "/placeholder-photo.jpg"),
]

export default function ProjectsPage() {

  return (
    <>
        <NavigationBar />
        <MainContentArea content={[
          <ContentContainer 
          content={[
            <SectionHeading text="All Projects" />,
            <ProjectArea projectInfoList={projectInfo} />
          ]} 
          bottomMargin={false}
          />   
        ]} />
            
        <Footer />
    </>
  )
}