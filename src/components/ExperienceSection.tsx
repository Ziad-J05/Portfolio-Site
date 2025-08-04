import '../index.css'
import ContentContainer from './ContentContainer';
import {JobInfo} from './JobTimeline';
import JobTimeline from './JobTimeline';

export default function ExperienceSection({jobInfoList}: {jobInfoList: JobInfo[]}){
  return(
    <>
      <ContentContainer content={[
        <h2 className="text-5xl mb-[1rem]">Experience</h2>,
        <JobTimeline jobInfoList={jobInfoList} />
      ]} />
    </>
  )
}

