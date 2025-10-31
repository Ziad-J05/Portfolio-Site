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
import { ArrowDown, AngleDown } from '../components/Icons';

/* const skills: Skill[] = Object.values(MySkills); */
const frontend: Skill[] = [
  MySkills.JavaScript,
  MySkills.React,
  MySkills.HTML,
  MySkills.CSS,
  MySkills.TypeScript,
  MySkills.Tailwind,
  
]
const backend: Skill[] = [
  MySkills.CSharp,
  MySkills.Unity,
  MySkills.CPlusPlus,
  MySkills.Java,
  MySkills.Godot,
]
const other: Skill[] = [
  MySkills.Blender,
  MySkills.Python,
  MySkills.Maya
]

const jobInfoList:JobInfo[] = [
  new JobInfo("Game Development Apprentice", "Simcoach Games", "2021", "2021", 
              ["Worked as part of a team of four to prototype games.", 
               "Pitched projects to the company's CEO after development was finished."]
             ),
  new JobInfo("Virtual Tech Instructor", "iD Tech", "2025", "Present", 
              ["Taught STEM technologies to students in one-on-one sessions and group tech camps.",
               "Learned new tools like Godot and Blender during lesson preparation."]
             )
]

function HomePage(){
  return(
    <>
    <NavigationBar />
        <IntroSection />
        <div className='pt-4 w-full h-0'>
          <div className='w-fit mx-auto'>
            <div className='grid grid-rows-1 grid-cols-[max-content_1fr_max-content]  justify-items-center items-center font-(family-name:--display-font) w-fit mx-8 relative -top-8 gap-4
                          bg-[var(--content)] px-2 py-1 text-xl font-semibold rounded-none border-2'>
              <AngleDown/> 
              <p className='text-center'>Learn more about my expereince + projects</p>
              <AngleDown/> 
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 auto-rows-min bg-[var(--secondary)] border-t-2 px-0 pb-24">  
            <SkillsSection skills={[backend,frontend,other]}/>   
            <ExperienceSection jobInfoList={jobInfoList} />
            
            <ProjectSection projectDataList={MyProjects.slice(0, 3)} />
          
        </div>
    <Footer />
    </>
  )
}

export default HomePage