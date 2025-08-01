import '../index.css'
import NavigationBar from '../components/NavigationBar'
import ProjectArea from '../components/ProjectArea'
import { ProjectInfo } from '../components/Project'
import Footer from '../components/Footer'

const projectInfo:ProjectInfo[] = 
[
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
]

export default function ProjectsPage() {

  return (
    <>
        <NavigationBar />
        <main className="bg-[#ffffff] pt-[3rem] pb-[3rem] mx-auto w-4xl">
            <div className="w-2xl mx-auto">
                <h2 className="text-5xl mb-[1rem]">All Projects</h2>
                <ProjectArea projectInfoList={projectInfo} />
            </div>
        </main>
        <Footer />
    </>
  )
}