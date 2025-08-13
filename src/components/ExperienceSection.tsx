import '../index.css'
import ContentContainer from './ContentContainer';
import { SectionHeading } from "./Headings";
import {JobInfo} from './JobTimeline';
import JobTimeline from './JobTimeline';

export default function ExperienceSection({jobInfoList}: {jobInfoList: JobInfo[]}){
  return(
    <div className='max-w-8xl'>
          <SectionHeading text="Experience" />
          <JobTimeline jobInfoList={jobInfoList} />
    </div>
  )
}

