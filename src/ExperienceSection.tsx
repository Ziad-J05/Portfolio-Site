import './index.css'
import {JobInfo} from './JobTimeline';
import JobTimeline from './JobTimeline';

export default function ExperienceSection({jobInfoList}: {jobInfoList: JobInfo[]}){
  return(
    <>
      <section id="experience" className="w-2xl mx-auto mb-[3rem]">
        <h2 className="text-5xl mb-[1rem]">Experience</h2>
        <JobTimeline jobInfoList={jobInfoList} />
      </section>
    </>
  )
}

