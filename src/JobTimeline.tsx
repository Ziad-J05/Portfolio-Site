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
import Description from './Description';

export class JobInfo {
    title: string;
    employer: string;
    startDate: number;
    endDate: number;
    description: string[];

    constructor( title: string, employer: string, startDate: number, endDate: number, description: string[]){
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

export default function JobTimeline({jobInfoList}: {jobInfoList: JobInfo[]}){

  const timelineItems: React.ReactElement[] = [];

  for(const jobInfo of jobInfoList){
    timelineItems.push(
      <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
              <TimelineTime>{jobInfo.startDate}-{jobInfo.endDate}</TimelineTime>
              <TimelineTitle>{jobInfo.title} | {jobInfo.employer}</TimelineTitle>
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
        <Timeline>
        
          {timelineItems}
        
        </Timeline>
      </ThemeProvider>
    </>
  )
}