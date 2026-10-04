import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading, PageHeading } from '../components/Headings'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

const aboutSectionContent:string[] = [
  "I'm a UX designer pusruing a Bachelor's of Science in Game Design and Development at Rochester Institute of Technology.",

  "UX design and research are my bread butter, though I also have plenty of expereince working with web technologies and frameworks. No matter what kind of project I'm working on, I always do what I can to be a voice for the people I design for. My love for design comes from my love for helping people through technology, and I try to put that into everything I do."
]

export default function AboutPage() {

  return (
    <>
      <NavigationBar />
      <PageHeading text="About Me" />
      <MainContentArea width='4xl' content={[
        <div className='flex flex-col lg:flex-row gap-12 px-12 justify-center'>
              <AboutSection content={aboutSectionContent}/>
              <img
                className="hidden size-96 object-cover border-4 rounded-3xl
                           shadow-(--shadow-decor) self-center" // Change from hidden to block after photo has been taken
                src="/placeholder-photo.jpg"
                alt="Photograph of the developer"
              />
        </div>
      ]} />
      <Footer />
    </>
  )
}