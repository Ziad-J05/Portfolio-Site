import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading } from '../components/Headings'
import Footer from '../components/Footer'

export default function ContactPage() {

  return (
    <>
      <NavigationBar />
      <MainContentArea width='4xl' content={[
        <ContentContainer 
          content={[
            <SectionHeading text="Contact Me" />,
            <div className='grid grid-cols-2 grid-rows-1 mb-4 text-lg'>
                
              <ul className='flex flex-col'>
                <li>Email: <a href="mailto:ziadjaafar05@gmail.com">ziadjaafar05@gmail.com</a></li>
                <li>Phone: <a href="tel:+17243935879">&#40;+1&#41; 724-393-5879</a></li>
              </ul>

              <ul className='flex flex-col'>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/ziad-jaafar222/">linkedin.com/in/ziad-jaafar222</a></li>
                <li>GitHub: <a href="https://github.com/Ziad-J05">github.com/Ziad-J05</a></li>
              </ul>

            </div>,

            <p className='text-lg'><a>Resume</a></p>
          ]} 
          bottomMargin={false}
        />
      ]} />
      <Footer />
    </>
  )
}