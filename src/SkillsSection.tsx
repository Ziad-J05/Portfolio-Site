import './index.css'
import { SkillsArea, IconSkillsArea } from './SkillsArea'

export default function SkillsSection(){
  return(
    <>
      {/* Skills */}
        <section id="skills" className="w-2xl mx-auto mb-[3rem]">
          <h2 className="text-5xl mb-[1rem]">Skills</h2>
          <div className="flex">
            <IconSkillsArea skills={["C#", "Unity", "JavaScript", "React", "Node.js"]} />
          </div>
          
        </section>
    </>
  )
}