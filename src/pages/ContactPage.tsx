import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import { LinkButton } from '../components/LinkButton'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading, PageHeading } from '../components/Headings'
import Footer from '../components/Footer'

export default function ContactPage() {

  return (
    <>
      <NavigationBar />
      <PageHeading text="Contact Me" />
        <MainContentArea width='4xl' content={[

            <div className='grid grid-cols-2 grid-rows-1 w-fit mb-4 mx-auto text-xl'>
                
              <ul className='flex flex-col gap-6'>
                <li>
                  <ThingBeforeLink text="Email"/>
                  <a href="mailto:ziadjaafar05@gmail.com">ziadjaafar05@gmail.com</a>
                </li>
                <li><ThingBeforeLink text="Phone"/><a href="tel:+17243935879">&#40;+1&#41; 724-393-5879</a></li>
              </ul>

              <ul className='flex flex-col gap-6'>
                <li><ThingBeforeLink text="LinkedIn"/><a href="https://www.linkedin.com/in/ziad-jaafar222/">linkedin.com/in/ziad-jaafar222</a></li>
                <li><ThingBeforeLink text="GitHub"/><a href="https://github.com/Ziad-J05">github.com/Ziad-J05</a></li>
                <li><ThingBeforeLink text="Resume"/><a href="">link</a></li>
              </ul>

            </div>

          ]} 
        />
      <Footer />
    </>
  )
}

function ThingBeforeLink({text}: {text: string}){
  return(
    <span className='mr-4 font-(family-name:--display-font) text-xl'>
      {text}:
    </span>
  )
}