import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading, PageHeading } from '../components/Headings'
import ProjectArea from '../components/ProjectArea'
import { ProjectData } from '../components/ProjectData'
import Footer from '../components/Footer'
import { MySkills} from '../data/MySkills'
import { MyProjects } from '../data/MyProjects'

export default function ProjectsPage() {

  return (
    <>
        <NavigationBar />
        <PageHeading text="My Projects" />
        <MainContentArea width='4xl' content={[
          <div className="grid grid-auto-rows grid-cols-2 gap-2 px-8 w-6xl mx-auto">
              <ProjectArea projectDataList={MyProjects} />
            </div>
        ]} />
            
        <Footer />
    </>
  )
}