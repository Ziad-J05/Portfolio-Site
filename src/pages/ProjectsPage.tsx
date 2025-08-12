import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading } from '../components/Headings'
import { ProjectFlex } from '../components/ProjectArea'
import { ProjectData } from '../components/ProjectData'
import Footer from '../components/Footer'
import { MySkills} from '../data/MySkills'
import { MyProjects } from '../data/MyProjects'

export default function ProjectsPage() {

  return (
    <>
        <NavigationBar />
        <MainContentArea width='4xl' content={[
          <ContentContainer 
          content={[
            <SectionHeading text="All Projects" />,
            <ProjectFlex projectDataList={MyProjects} />
          ]} 
          bottomMargin={false}
          />   
        ]} />
            
        <Footer />
    </>
  )
}