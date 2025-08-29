import '../index.css'
import NavigationBar from '../components/NavigationBar'
import { LinkButton, LinkButtonFull } from '../components/LinkButton'
import { ReactElement } from 'react'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { PageHeading, SectionHeading } from '../components/Headings'
import Footer from '../components/Footer'
import { Route } from 'react-router-dom'
import { GetProjectPageLink, ProcessImage, ProjectData } from '../components/ProjectData'

interface ProjectPageProps{
    projectName: string
    companyName: string
    description: string[]
    sampleLink: string
    githubLink: string
    thumbnailSrc: string
    processImages: ProcessImage[]
}

export function CreateProjectInfoPages({projectDataList}: {projectDataList: ProjectData[]}){

    const pages:ReactElement[] = projectDataList.map((data) => 
        <Route 
            path={GetProjectPageLink(data.projectName)} 
            element={<ProjectPage 
                projectName={data.projectName} 
                companyName={data.companyName} 
                description={data.description} 
                sampleLink={data.sampleLink} 
                githubLink={data.githubLink} 
                thumbnailSrc={data.thumbnailSrc}
                processImages={data.processImages} 
            />}
        />)

    return ( pages );
}

export function ProjectPage({projectName, companyName, description, sampleLink, githubLink, thumbnailSrc, processImages}: ProjectPageProps) {

  const bodyParagraphs:ReactElement[] = description.map((text) => <p>{text}</p>)
  
  const captionedImageElements: ReactElement[] = []
  for (let image of processImages) {
    captionedImageElements.push(
        /* TODO: these divs are just Flowbite cards. They should be card components instead*/
        <div className='relative top-0 left-0 h-fit max-w-lg overflow-hidden rounded-lg border-2 bg-white'>
            <img className='object-cover h-fit w-fit sm:h-96' src={image.source} alt={image.caption}></img>
            <p className='text-lg px-2'>{image.caption}</p>
        </div>
    )
  }

  return (
    <>
        <NavigationBar />

        <div className='font-(family-name:--display-font) bg-[var(--content)] pt-24 pb-12 border-b-0 mx-auto'>
            <h1 className="text-center lg:text-left text-6xl md:text-7xl w-full lg:w-4xl font-bold mb-4 mx-auto">{projectName}</h1>
            <p className="text-center lg:text-left text-4xl md:text-5xl w-full lg:w-4xl mx-auto font-light">{companyName}</p>
        </div>


        <div className='bg-[var(--secondary)] pb-24 pt-12 px-6  mx-auto'>
            
            <img className='w-4xl mx-auto h-72 object-cover rounded-xl border-2' src={thumbnailSrc} />
            <div className='mt-12 grid w-4xl mx-auto grid-rows-1 grid-cols-[1fr_calc(var(--spacing)*72)]'>
                <div className='col-span-1 col-start-1 text-lg flex flex-col gap-4 w-full'>
                    {bodyParagraphs}
                </div>
                <div className='justify-self-stretch px-8 col-span-1 col-start-2 flex flex-col gap-8'>
                    <LinkButtonFull text='View Project' link={sampleLink}/>
                    <LinkButtonFull text='Github' link={githubLink}/>
                    <LinkButtonFull text='Live Demo' link={githubLink}/>
                </div>
            </div>            

            <h2 className="font-(family-name:--display-font) text-center lg:text-left text-6xl w-full lg:w-4xl font-semibold mt-12 mb-12 mx-auto">Process</h2>

            <div className='grid grid-auto-rows-auto grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-4xl mx-auto justify-items-center'>
                {captionedImageElements}
            </div>
        </div>
        <Footer />
    </>
  )
}