import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading, PageHeading } from '../components/Headings'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

const aboutSectionContent:string[] = [
  "I'm a game designer and software developer pusruing a Bachelor's of Science in Game Design and Development at Rochester Institute of Technology.",

  "Unity and C# are my bread and butter, though I'm also familiar with frontend development technologies like React and Typescript, as well as languages like C++ and Java. No matter what project I'm working on, I always put the user first, making UX as good as it can be."
]

export default function AboutPage() {

  return (
    <>
      <NavigationBar />
      <PageHeading text="About Me" />
      <MainContentArea width='4xl' content={[
        <div className='flex gap-12 px-12'>
              <AboutSection content={aboutSectionContent}/>
              <img
                className="block size-96 object-cover border-2 rounded-xl"
                src="/placeholder-photo.jpg"
              />
        </div>
      ]} />
      <Footer />
    </>
  )
}