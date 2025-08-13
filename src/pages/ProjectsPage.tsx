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

export default function ProjectsPage() {

  return (
    <>
        <NavigationBar />
        <main className='bg-[var(--secondary)] py-36 mx-auto w-6xl min-h-[calc(100vh-var(--text-lg)-8*var(--spacing))] border-l-2 border-r-2'>
          <div className='w-5xl mx-auto mb-12'>
            <SectionHeading text="All Projects" />
          </div>
            <div className="grid grid-auto-rows grid-cols-2 gap-2 px-8 w-6xl">
              <ProjectArea projectDataList={MyProjects} />
            </div>
          
        </main>
            
        <Footer />
    </>
  )
}