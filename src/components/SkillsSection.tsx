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
          <div className='grid grid-rows-1 grid-cols-3 gap-6'>
            <ThemeProvider theme={cardTheme}>
              <Card>
                <h3 className="text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                            Backend...
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                <IconSkillsArea skills={skills[0]} />
              </div>
              </Card>
              <Card>
                <h3 className="text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                            ...Frontend...
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                <IconSkillsArea skills={skills[1]} />
              </div>
              </Card>
              <Card>
                <h3 className="text-center text-4xl font-semibold tracking-tight px-2 py-1 text-black">
                            ...and More!
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                <IconSkillsArea skills={skills[2]} />
              </div>
              </Card>
            </ThemeProvider>
          </div>
        ]} 
        fixedWidth={false}
      />
    </>
  )
}