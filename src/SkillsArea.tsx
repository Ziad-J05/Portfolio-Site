import './index.css'
import { Badge } from 'flowbite-react'

export default function SkillsArea({skills}: {skills: string[]}){

    /* TODO: using .map would likely be more idiomatic */
    const skillBadges: React.ReactElement[] = [];

    for(const skill of skills) {
        skillBadges.push(<Badge color="info">{skill}</Badge>)
    }
    
    return( 
        <>
            {skillBadges}
        </>
    )
}