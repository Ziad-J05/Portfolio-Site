import '../index.css'
import { JobInfo } from '../components/JobTimeline';
import { ProjectInfo, FeaturedProjectInfo } from '../components/Project'
import NavigationBar from '../components/NavigationBar';
import MainContentArea from '../components/MainContentArea';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection'
import ProjectSection from '../components/ProjectSection' 
import Footer from '../components/Footer';
import { Skill } from '../components/Skill';
import { MySkills} from '../components/MySkills';

/* const skills: Skill[] = Object.values(MySkills); */
const skills: Skill[] = [
  MySkills.CSharp,
  MySkills.Unity,
  MySkills.CPlusPlus,
  MySkills.JavaScript,
  MySkills.React,
  MySkills.HTML,
  MySkills.CSS,
  MySkills.Java,
  MySkills.Godot,
  MySkills.TypeScript,
  MySkills.Tailwind,
  MySkills.Python,
  MySkills.Blender,
  MySkills.Maya
]

const jobInfoList:JobInfo[] = [
  new JobInfo("Game Development Apprentice", "Simcoach Games", 2021, 2021, 
              ["Worked as part of a team of four to prototype games.", 
               "Pitched projects to the company's CEO after development was finished."]
             ),
  new JobInfo("Virtual Tech Instructor", "iD Tech", 2025, 2025, 
              ["Taught STEM technologies to students in one-on-one sessions and group tech camps.",
               "Learned new tools like Godot and Blender during lesson preparation."]
             )
]

const projectInfo:ProjectInfo[] = 
[
  new ProjectInfo("Pokedex Search Website", "Solo Developer", [MySkills.HTML, MySkills.CSS, MySkills.JavaScript], "/projects/project-info", "/placeholder-photo.jpg"),
  new ProjectInfo("Gravity Game", "Solo Developer", [MySkills.CPlusPlus, MySkills.SFML, MySkills.Box2D], "/projects/project-info", "/placeholder-photo.jpg")
]

const featuredProjectInfo: FeaturedProjectInfo = new FeaturedProjectInfo(
  "Eulyss",
  "Programmer",
  [MySkills.Unity, MySkills.CSharp],
  "/projects/project-info",
  "/placeholder-photo.jpg",
  "Collaborated as part of a team of two to create an adventure game with a custom text parser that imports text files as graphs for in-game dialogue. Currently in development."
)

function HomePage(){
  return(
    <>
    <NavigationBar />
      <MainContentArea content={[
        <IntroSection />,
        <SkillsSection skills={skills}/>,
        <ExperienceSection jobInfoList={jobInfoList} />,
        <ProjectSection 
          projectDataList={projectInfo} 
          featuredProjectData={featuredProjectInfo} 
        />
      ]} />
    <Footer />
    </>
  )
}

export default HomePage