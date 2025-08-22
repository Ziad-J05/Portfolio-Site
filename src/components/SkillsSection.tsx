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
        content={[
          <SectionHeading text="Skills" />,
          <div className='grid grid-rows-1 grid-cols-3 gap-6 max-w-7xl'>

              <div className='py-4 px-4 bg-[var(--content)] border-2 rounded-lg flex flex-col justify-between align-top gap-4'>
                <div className='flex flex-col justify-start gap-4'>
                  <h3 className="font-(family-name:--display-font) text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                              Backend...
                  </h3>
                  <p className='text-lg'>My bread and butter is backend software development, especially when it comes to game design! Languages like C# and C++ are my go-to's, and I'm familiar with libraries like SFML and Box2D.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  <IconSkillsArea skills={skills[0]} />
                </div>
              </div>

              <div className='py-4 px-4 bg-[var(--content)] border-2 rounded-lg flex flex-col justify-between align-top gap-4'>
                <div className='flex flex-col justify-start gap-4'>
                  <h3 className="font-(family-name:--display-font) text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                              ...Frontend...
                  </h3>
                  <p className='text-lg'>Although I have the most experience with backend, I have a soft spot for frontend web development. JavaScript comes pretty naturally to me and I've recently been learning TypeScript and React.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  <IconSkillsArea skills={skills[1]} />
                </div>
              </div>
              
              <div className='py-4 px-4 bg-[var(--content)] border-2 rounded-lg flex flex-col justify-between align-top gap-4'>
                <div className='flex flex-col justify-start gap-4'>
                  <h3 className="font-(family-name:--display-font) text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                            ...and More!
                  </h3>
                  <p className='text-lg'>Throughout my experience on projects and jobs as a game developer, I've had to pick up different software for game design and 3D modeling.</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                <IconSkillsArea skills={skills[2]} />
              </div>
              </div>

          </div>
        ]} 
        fixedWidth={false}
      />
    </>
  )
}