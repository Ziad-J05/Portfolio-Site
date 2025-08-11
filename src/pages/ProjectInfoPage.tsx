import '../index.css'
import NavigationBar from '../components/NavigationBar'
import { LinkButton, LinkButtonFull } from '../components/LinkButton'
import { ReactElement } from 'react'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { PageHeading, SectionHeading } from '../components/Headings'
import Footer from '../components/Footer'
import { Route } from 'react-router-dom'

export type ProcessImage = {
    source: string;
    caption: string;
}

export interface ProjectInfo{
    projectName: string
    companyName: string
    description: string[]
    projectLink: string
    githubLink: string
    processImages: ProcessImage[]
}

export function CreateProjectInfoPages({projectInfoList}: {projectInfoList: ProjectInfo[]}){
    
    const pages:ReactElement[] = projectInfoList.map((info) => <Route path={'/projects/' + info.projectName.toLowerCase().replace(/\s/g, "-")} element={<ProjectInfoPage projectName={info.projectName} companyName={info.companyName} description={info.description} projectLink={info.projectLink} githubLink={info.githubLink} processImages={info.processImages} />}/>)

    return ( pages );
}

export function ProjectInfoPage({projectName, companyName, description, projectLink, githubLink, processImages}: ProjectInfo) {

  const bodyParagraphs:ReactElement[] = description.map((text) => <p>{text}</p>)
  
  const captionedImageElements: ReactElement[] = []
  for (let image of processImages) {
    captionedImageElements.push(
        /* TODO: these divs are just Flowbite cards. They should be card components instead*/
        <div className='relative top-0 left-0 h-fit overflow-hidden rounded-lg border-2 bg-white'>
            <img className='object-cover w-fit h-96' src={image.source}></img>
            <p className='text-lg px-2'>{image.caption}</p>
        </div>
    )
  }

  return (
    <>
        <NavigationBar />

        <MainContentArea width='6xl' content={[
            <>
            <PageHeading text={projectName} />
            <p className="text-4xl w-4xl mx-auto font-regular">{companyName}</p>
            <img className='w-6xl h-64 object-cover border-y-2 mt-4 mb-8' src='/placeholder-photo.jpg' />

            <div className='grid w-4xl mx-auto grid-rows-1 grid-cols-[1fr_calc(var(--spacing)*64)]'>
                <div className='col-span-1 col-start-1 text-lg flex flex-col gap-4 w-2xl'>
                    {bodyParagraphs}
                </div>
                <div className='justify-self-stretch px-8 col-span-1 col-start-2 flex flex-col gap-8'>
                    <LinkButtonFull text='View Project' link={projectLink}/>
                    <LinkButtonFull text='Github' link={githubLink}/>
                </div>
            </div>            

            <h2 className="text-5xl w-4xl font-semibold mb-4 mt-8 mx-auto">Process</h2>

            <div className='grid grid-auto-rows-auto grid-cols-2 gap-4 w-4xl mx-auto '>
                {captionedImageElements}
            </div>
            </>
        ]} />

        <footer className="mx-auto text-lg w-6xl py-4 bg-[#F7EDE2] text-black border-2 border-b-0">
            <p className='w-2xl mx-auto text-center'>&copy;2025 Ziad Jaafar - Made with React and Tailwind</p>
        </footer>
    </>
  )
}