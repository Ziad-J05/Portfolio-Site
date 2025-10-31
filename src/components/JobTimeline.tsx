import '../index.css'
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
import Description from './Description';

export class JobInfo {
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    description: string[];

    constructor( title: string, employer: string, startDate: string, endDate: string, description: string[]){
      this.title = title;
      this.employer = employer;
      this.startDate = startDate;
      this.endDate = endDate;
      this.description = description;
    }
}

const timelineTheme = createTheme({
  timeline: {
    root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l-2 border-black dark:border-gray-700"
      }
    },
    item: {
      root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6"
      },
      content: {
        root: {
          base: "",
          horizontal: "mt-3 sm:pr-8",
          vertical: ""
        },
        body: {
          base: "bg-[var(--content)] border-2 border-black border-t-0 rounded-b-lg px-4 pb-4 pt-2 mb-1 text-lg font-normal text-black dark:text-gray-400"
        },
        time: {
          base: "relative top-2 -left-2 bg-[var(--content)] p-1 text-lg border-2 font-semibold leading-none text-black dark:text-gray-500"
        },
        title: {
          base: "bg-[var(--accent-lt)] flex border-2 border-black rounded-t-lg px-4 pt-4 pb-2 gap-2 text-2xl font-normal text-black dark:text-white"
        }
      },
      point: {
        horizontal: "flex items-center",
        line: "hidden h-0.5 w-full bg-black sm:flex dark:bg-gray-700",
        marker: {
          base: {
            horizontal: "absolute -left-2 h-4 w-4 rounded-full shadow-[1px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-[var(--accent-dk)] dark:border-gray-900 dark:bg-gray-700",
            vertical: "absolute -left-2 mt-2 h-4 w-4 rounded-full shadow-[1px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-[var(--accent-lt)] dark:border-gray-900 dark:bg-gray-700"
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

export default function JobTimeline({jobInfoList}: {jobInfoList: JobInfo[]}){

  const timelineItems: React.ReactElement[] = [];

  for(const jobInfo of jobInfoList){
    timelineItems.push(
      <TimelineItem key={`${jobInfo.title}${jobInfo.startDate}`}>
              <TimelinePoint />
              <TimelineContent>
              <TimelineTime>{jobInfo.startDate}-{jobInfo.endDate}</TimelineTime>
              <TimelineTitle>
                <div className='font-(family-name:--display-font) text-3xl font-semibold'>{jobInfo.employer}</div>
                </TimelineTitle>
              <TimelineBody>
                <Description text={jobInfo.description} />
              </TimelineBody>
              </TimelineContent>
          </TimelineItem>
    )
  }

  return(
    <>
      <ThemeProvider theme={timelineTheme}>
        <Timeline horizontal>
        
          {timelineItems}
        
        </Timeline>
      </ThemeProvider>
    </>
  )
}