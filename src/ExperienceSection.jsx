import './index.css'
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

export function ExperienceSection(){
  return(
    <>
    {/* Experience */}
        <section id="experience" className="w-2xl mx-auto mb-[3rem]">
          <h2 className="text-5xl mb-[1rem]">Experience</h2>
            <Timeline>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>20XX - 20XX</TimelineTime>
                <TimelineTitle>Job Title | Employer</TimelineTitle>
                <TimelineBody>
                    <ul className="list-disc list-inside">
                        <li className="ml-[0.5em]">Detail</li>
                        <li className="ml-[0.5em]">Detail</li>
                        <li className="ml-[0.5em]">Detail</li>
                    </ul>
                </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>20XX - 20XX</TimelineTime>
                <TimelineTitle>Job Title | Employer</TimelineTitle>
                <TimelineBody>
                    <ul className="list-disc list-inside">
                        <li className="ml-[0.5em]">Detail</li>
                        <li className="ml-[0.5em]">Detail</li>
                        <li className="ml-[0.5em]">Detail</li>
                    </ul>
                </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>20XX - 20XX</TimelineTime>
                <TimelineTitle>Job Title | Employer</TimelineTitle>
                <TimelineBody>
                    <ul className="list-disc list-inside">
                        <li className="ml-[0.5em]">Detail</li>
                        <li className="ml-[0.5em]">Detail</li>
                        <li className="ml-[0.5em]">Detail</li>
                    </ul>
                </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
        </section>
    </>
  )
}

function JobDetails(){
    return(
        <>
            <li className="mt-[1em]">
              <h3 className="text-2xl font-semibold">
                Job Title <span className="font-normal">Date</span>
              </h3>
              <ul className="list-disc list-inside">
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
              </ul>
            </li>
        </>
    )
}