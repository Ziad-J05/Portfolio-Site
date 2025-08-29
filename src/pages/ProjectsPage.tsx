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
          <div className="grid grid-auto-rows grid-cols-1 xl:grid-cols-2 gap-2 justify-items-center px-8 max-w-lg md:max-w-7xl mx-auto">
              <ProjectArea projectDataList={MyProjects} />
            </div>
        ]} />
            
        <Footer />
    </>
  )
}