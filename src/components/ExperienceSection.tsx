import '../index.css'
import ContentContainer from './ContentContainer';
import { SectionHeading } from "./Headings";
import {JobInfo} from './JobTimeline';
import JobTimeline from './JobTimeline';

export default function ExperienceSection({jobInfoList}: {jobInfoList: JobInfo[]}){
  return(
    <div className='max-w-7xl mx-auto'>
          <SectionHeading text="Industry Experience" />
          <div className='mx-12'>
            <JobTimeline jobInfoList={jobInfoList} />
          </div>
          
          
    </div>
  )
}

