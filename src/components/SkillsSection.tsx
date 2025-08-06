import '../index.css'
import { IconSkillsArea } from './SkillsArea'
import { ReactElement } from 'react';
import ContentContainer from './ContentContainer';
import { SectionHeading } from './Headings';

export default function SkillsSection({skills}: {skills: Record<string, ReactElement>}){
  return(
    <>
      <ContentContainer 
        content={[
          <SectionHeading text="Skills" />,
          <div className="flex flex-wrap gap-2">
            <IconSkillsArea skills={skills} />
          </div>
        ]} 
        bottomMargin={true}
      />
    </>
  )
}