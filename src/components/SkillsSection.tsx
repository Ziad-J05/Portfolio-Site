import '../index.css'
import { IconSkillsArea } from './SkillsArea'
import { ReactElement } from 'react';
import ContentContainer from './ContentContainer';

export default function SkillsSection({skills}: {skills: Record<string, ReactElement>}){
  return(
    <>
      {/* Skills */}
        <ContentContainer 
          content={[
            <h2 className="text-5xl mb-[1rem]">Skills</h2>,
            <div className="flex flex-wrap gap-2">
              <IconSkillsArea skills={skills} />
            </div>
          ]} 
          bottomMargin={true}
        />
    </>
  )
}