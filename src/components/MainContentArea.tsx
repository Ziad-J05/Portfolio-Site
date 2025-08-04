import '../index.css'
import { JobInfo } from './JobTimeline';
import { ProjectInfo, FeaturedProjectInfo } from './Project'
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection' 

import { CsharpPlain, UnityPlain, CplusplusPlain, JavascriptPlain, ReactOriginal, Html5Plain, Css3Plain, JavaPlain, TypescriptPlain, GodotPlain, PythonPlain, BlenderOriginal, MayaPlain, TailwindcssOriginal} from 'devicons-react';

const skillsRecord = {
  "C#": <CsharpPlain size="26"/>,
  "Unity": <UnityPlain size="26"/>,
  "C++": <CplusplusPlain  size="26"/>,
  "JavaScript": <JavascriptPlain size="26"/>,
  "React": <ReactOriginal size="26"/>,
  "HTML": <Html5Plain size="26"/>,
  "CSS": <Css3Plain size="26"/>,
  "Java": <JavaPlain size="26"/>,
  "TypeScript": <TypescriptPlain size="26"/>,
  "Godot": <GodotPlain size="26"/>,
  "Tailwind": <TailwindcssOriginal size="26"/>,
  "Python": <PythonPlain size="26"/>,
  "Blender": <BlenderOriginal size="26"/>,
  "Maya": <MayaPlain size="26"/>,
}

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
  new ProjectInfo("Pokedex Search Website", "Solo Developer", ["HTML", "CSS", "JavaScript"], "#", "/placeholder-photo.jpg"),
  new ProjectInfo("Gravity Game", "Solo Developer", ["C++", "SFML", "Box2D"], "#", "/placeholder-photo.jpg")
]

const featuredProjectInfo: FeaturedProjectInfo = new FeaturedProjectInfo(
  "Eulyss",
  "Programmer",
  ["Unity", "C#"],
  "#",
  "/placeholder-photo.jpg",
  "Collaborated as part of a team of two to create an adventure game with a custom text parser that imports text files as graphs for in-game dialogue. Currently in development."
)

function IntroSection(){
  return (
    <>
      {/* Intro */}
        <section className="grid grid-cols-[18em_1fr] grid-rows-[1fr_3em] gap-x-[4px] w-lg mx-auto h-auto mb-[3rem]">
          <h1 className="justify-self-stretch self-center row-start-1 row-end-2 col-start-1 col-end-2 text-5xl ">
            Hello, I'm<span className="block font-bold text-7xl">Ziad</span>
            <span className="block font-bold text-7xl ml-[1em]">Jaafar</span>
          </h1>
          <p className="justify-self-end-safe self-start row-start-2 row-end-3 col-start-1 col-end-2">
            Game developer + software developer based out of Pittsburgh, PA
          </p>
          <img
            className="row-start-1 row-end-2 col-start-2 col-end-3 size-48 object-cover"
            src="/placeholder-photo.jpg"
          />
          <ul className="row-start-2 row-end-3 col-start-2 col-end-3">
            <li>Email</li>
            <li>Resume</li>
          </ul>
        </section>
    </>
  )
}

function AboutSection(){
  return(
    <>
      {/* About */}
        <section className="w-2xl mx-auto mb-[3rem]">
          <h2 className="text-5xl mb-[1rem]">About</h2>
          <p className="">
            I'm a software developer pusruing a Bachelor's of Science in Game Design and Development at Rochester Institute of Technology.
          </p>
          <p className=""> 
            Unity and C# are my bread and butter, though I'm also familiar with frontend development technologies like React and Typescript, as well as languages like C++ and Java. No matter what project I'm working on, I always put the user first, making UX as good as it can be.
          </p>
        </section>
    </>
  )
}

function MainContentArea(){
  return(
    <>
      <main className="bg-[#ffffff] py-36 mx-auto w-4xl">

          <IntroSection />
          <AboutSection />
          <SkillsSection skills={skillsRecord}/>
          <ExperienceSection jobInfoList={jobInfoList} />
          <ProjectSection 
            projectDataList={projectInfo} 
            featuredProjectData={featuredProjectInfo} 
          />
          
      </main>
    </>
  )
}

export default MainContentArea