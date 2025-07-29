import './index.css'
import {JobInfo} from './JobTimeline';
import JobTimeline from './JobTimeline';

const a:JobInfo[] = [
  new JobInfo("First Job", "Eployer", 2000, 2002, ["erm", "uh"]),
  new JobInfo("Second Job", "New Eployer", 2002, 2022, ["erm erm", "uh um"])
]

export default function ExperienceSection(){
  return(
    <>
      <section id="experience" className="w-2xl mx-auto mb-[3rem]">
        <h2 className="text-5xl mb-[1rem]">Experience</h2>
        <JobTimeline jobInfoList={a} />
      </section>
    </>
  )
}

