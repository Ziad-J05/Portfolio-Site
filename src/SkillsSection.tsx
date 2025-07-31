import './index.css'
import { IconSkillsArea } from './SkillsArea'
import { ReactElement } from 'react';

export default function SkillsSection({skills}: {skills: Record<string, ReactElement>}){
  return(
    <>
      {/* Skills */}
        <section id="skills" className="w-2xl mx-auto mb-[3rem]">
          <h2 className="text-5xl mb-[1rem]">Skills</h2>
          <div className="flex">
            <IconSkillsArea skills={skills} />
          </div>
          
        </section>
    </>
  )
}