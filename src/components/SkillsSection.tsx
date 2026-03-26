import '../index.css'
import { IconSkillsArea } from './SkillsArea'
import { ReactElement } from 'react';
import ContentContainer from './ContentContainer';
import { SectionHeading } from './Headings';
import { Skill } from './Skill';
import { LinkButton } from './LinkButton';
import { Card, ThemeProvider, createTheme } from 'flowbite-react';
import { cardTheme } from './ProjectThumbnails';

export default function SkillsSection({skills}: {skills: Skill[][]}){
  return(
    <>
      <ContentContainer 
        content={
          <>
          <SectionHeading text="Skills" />
          <div className='flex flex-col lg:flex-row gap-6 max-w-lg mx-12 lg:max-w-7xl'>

              <div className='basis-0 grow py-4 px-4 bg-[var(--content)] border-2 rounded-lg flex flex-col justify-between align-top gap-4'>
                <div className='flex flex-col justify-start gap-4'>
                  <h3 className="font-(family-name:--display-font) text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                              Languages...
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  <IconSkillsArea skills={skills[0]} />
                </div>
              </div>

              <div className='basis-0 grow py-4 px-4 bg-[var(--content)] border-2 rounded-lg flex flex-col justify-between align-top gap-4'>
                <div className='flex flex-col justify-start gap-4'>
                  <h3 className="font-(family-name:--display-font) text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                              ...Frameworks...
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  <IconSkillsArea skills={skills[1]} />
                </div>
              </div>
              
              <div className='basis-0 grow py-4 px-4 bg-[var(--content)] border-2 rounded-lg flex flex-col justify-between align-top gap-4'>
                <div className='flex flex-col justify-start gap-4'>
                  <h3 className="font-(family-name:--display-font) text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                            ...and Software!
                  </h3>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                <IconSkillsArea skills={skills[2]} />
              </div>
              </div>

          </div>
        </>
        } 
        fixedWidth={false}
      />
    </>
  )
}