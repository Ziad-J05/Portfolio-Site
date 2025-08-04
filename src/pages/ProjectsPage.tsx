import '../index.css'
import NavigationBar from '../components/NavigationBar'
import ProjectArea from '../components/ProjectArea'
import { ProjectInfo } from '../components/Project'
import Footer from '../components/Footer'

const projectInfo:ProjectInfo[] = 
[
  new ProjectInfo("Eulyss", "Programmer", ["Unity", "C#"], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Pokedex Search Website", "Solo Developer", ["HTML", "CSS", "JavaScript"], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Impetus", "Programmer", ["Unity", "C#"], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Space Trucker", "Solo Developer", ["HTML", "CSS", "Javascript", "PixiJS"], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Gravity Game", "Solo Developer", ["C++", "SFML", "Box2D"], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Johnny Rocket", "Programmer", ["Monogame", "C#"], "#", "/placeholder-photo.jpg"),
]

export default function ProjectsPage() {

  return (
    <>
        <NavigationBar />
        <main className="bg-[#ffffff] py-36 mx-auto w-4xl">
            <div className="w-2xl mx-auto">
                <h2 className="text-5xl mb-[1rem]">All Projects</h2>
                <ProjectArea projectInfoList={projectInfo} />
            </div>
        </main>
        <Footer />
    </>
  )
}