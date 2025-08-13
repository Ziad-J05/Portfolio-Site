import '../index.css'
import { JobInfo } from '../components/JobTimeline';
import NavigationBar from '../components/NavigationBar';
import MainContentArea from '../components/MainContentArea';
import IntroSection from '../components/IntroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection'
import ProjectSection from '../components/ProjectSection' 
import Footer from '../components/Footer';
import { Skill } from '../components/Skill';
import { MySkills} from '../data/MySkills';
import { MyProjects } from '../data/MyProjects';

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

function HomePage(){
  return(
    <>
    <NavigationBar />
        <IntroSection />
        <div className="grid grid-cols-2 auto-rows-min bg-[var(--secondary)] border-t-2 px-12 pb-24 pt-12">
          <div className='col-span-2 col-start-1 row-start-1 justify-self-center'>      
            <ExperienceSection jobInfoList={jobInfoList} />
          </div>  
          <div className='col-span-2 col-start-1 row-start-2 justify-self-center'>
            <ProjectSection projectDataList={MyProjects.slice(0, 3)} />
          </div>
        </div>
    <Footer />
    </>
  )
}

export default HomePage