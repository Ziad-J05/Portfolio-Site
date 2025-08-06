import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading } from '../components/Headings'
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
      <MainContentArea content={[
        <ContentContainer 
          content={[
            <SectionHeading text="About Me" />,
            <div className='grid grid-columns-2 grid-rows-1'>
              <AboutSection content={aboutSectionContent}/>
              <img
                className="block w-64 h-128 object-cover border-2 rounded-xl"
                src="/placeholder-photo.jpg"
              />
            </div>,
            
          ]} 
          bottomMargin={false}
        />
      ]} />
      <Footer />
    </>
  )
}