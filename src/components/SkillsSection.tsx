import '../index.css'
import { IconSkillsArea } from './SkillsArea'
import { ReactElement } from 'react';
import ContentContainer from './ContentContainer';
import { SectionHeading } from './Headings';
import { Skill } from './Skill';
import { LinkButton } from './LinkButton';

export default function SkillsSection({skills}: {skills: Skill[]}){
  return(
    <>
      <ContentContainer 
        content={[
          <SectionHeading text="Skills" />,
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            <IconSkillsArea skills={skills} />
          </div>
        ]} 
        fixedWidth={false}
      />
    </>
  )
}