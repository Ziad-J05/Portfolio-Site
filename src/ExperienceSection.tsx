import './index.css'
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  createTheme, 
  ThemeProvider
} from "flowbite-react";

const timelineTheme = createTheme({
  timeline: {
    root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l border-gray-700 dark:border-gray-700"
      }
    },
    item: {
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-blue-600 sm:flex dark:bg-gray-700",
      marker: {
        base: {
          horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-amber-400 bg-amber-400 dark:border-gray-900 dark:bg-gray-700",
          vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-700 dark:border-gray-900 dark:bg-gray-700"
        },
        icon: {
          base: "h-3 w-3 text-primary-600 dark:text-primary-300",
          wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900"
        }
      },
      vertical: ""
    }
  }
  }
});

export default function ExperienceSection(){
  return(
    <>
      <section id="experience" className="w-2xl mx-auto mb-[3rem]">
        <h2 className="text-5xl mb-[1rem]">Experience</h2>
        <ThemeProvider theme={timelineTheme}>
          <Timeline >
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
        </ThemeProvider>
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