import './index.css'
import { JobInfo } from './JobTimeline';
import { ProjectInfo, FeaturedProjectInfo } from './Project'
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection'
import ProjectSection from './ProjectSection' 

import { CsharpPlain } from 'devicons-react';
import { UnityPlain } from 'devicons-react';

const skillsRecord = {
  "C#": <CsharpPlain size="26"/>,
  "Unity": <UnityPlain size="26"/>
}

const jobInfoList:JobInfo[] = [
  new JobInfo("First Job", "Employer", 2000, 2002, ["erm", "uh"]),
  new JobInfo("Second Job", "New Employer", 2002, 2022, ["erm erm", "uh um"])
]

const projectInfo:ProjectInfo[] = 
[
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#"),
  new ProjectInfo("Taken", "Programmer", ["Unity", "C#"], "#")
]

const featuredProjectInfo: FeaturedProjectInfo = new FeaturedProjectInfo(
  "Pokedex Search Website",
  "Solo Developer",
  ["HTML", "CSS", "JavaScript"],
  "#",
  "Designed and developed a web app that retrieves and organizes information from PokeAPI, allowing users to search for their favorite monsters."
)

function IntroSection(){
  return (
    <>
      {/* Intro */}
        <section className="grid grid-cols-[18em_1fr] grid-rows-[1fr_3em] gap-x-[4px] w-lg mx-auto h-auto mb-[3rem] mt-[6rem]">
          <h1 className="justify-self-stretch self-center row-start-1 row-end-2 col-start-1 col-end-2 text-5xl ">
            Hello, I'm<span className="block font-bold text-7xl">Ziad</span>
            <span className="block font-bold text-7xl ml-[1em]">Jaafar</span>
          </h1>
          <p className="justify-self-end-safe self-start row-start-2 row-end-3 col-start-1 col-end-2">
            Game developer + software developer based out of Pittsburgh, PA
          </p>
          <img
            className="row-start-1 row-end-2 col-start-2 col-end-3 w-48"
            src="img/placeholder-photo.png"
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
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum
            magna ut nulla rhoncus, quis aliquam lacus rhoncus. Nunc eget purus
            sollicitudin, laoreet libero nec, eleifend neque.
          </p>
        </section>
    </>
  )
}

function MainContentArea(){
  return(
    <>
      <main className="bg-[#ffffff] pt-[3rem] pb-[3rem] mx-auto w-4xl">

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