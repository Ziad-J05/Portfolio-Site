import '../index.css'
import NavigationBar from '../components/NavigationBar'
import MainContentArea from '../components/MainContentArea'
import { LinkButton } from '../components/LinkButton'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading, PageHeading } from '../components/Headings'
import Footer from '../components/Footer'
import { ReactElement } from 'react'
import { ArrowDown, LinkedIn, Envelope, GitHub, Phone } from '../components/Icons'

export default function ContactPage() {

  return (
    <>
      <NavigationBar />
      <PageHeading text="Contact Me" />
        <MainContentArea width='4xl' content={[

            <div className='grid grid-cols-2 grid-rows-1 gap-6 w-fit mb-4 mx-auto text-xl'>
                
              <ul className='flex flex-col gap-6'>
                <AnchorWidget label="Email" href="mailto:ziadjaafar05@gmail.com" display='ziadjaafar05@gmail.com' icon={<Envelope/>}/>
                <AnchorWidget label="Phone" href="tel:+1724-393-5879" display='724-393-5879' icon={<Phone/>}/>
              </ul>

              <ul className='flex flex-col gap-6'>
                <AnchorWidget label="Github" href="https://github.com/Ziad-J05" display='github.com/Ziad-J05' icon={<GitHub/>}/>
                <AnchorWidget label="LinkedIn" href="https://www.linkedin.com/in/ziad-jaafar222/" display='linkedin.com/in/ziad-jaafar222/' icon={<LinkedIn/>}/>
              </ul>

            </div>

          ]} 
        />
      <Footer />
    </>
  )
}

interface AnchorWidgetProps{
  label: string;
  href: string;
  display: string;
  icon: ReactElement;
}

function AnchorWidget({label, href, display, icon}: AnchorWidgetProps){
  return(
    <div className='flex gap-3'>

      <div className='p-5 border-2 rounded-xl bg-[var(--accent-lt)] shadow-(--shadow)'>{icon}</div>
    
      <div className='flex flex-col justify-evenly'>
        <div className='mr-4 font-(family-name:--display-font) font-semibold text-2xl'>
          {label}
        </div>
        <a className='text-black underline hover:text-[var(--primary)]' href={href}>{display}</a>
      </div>
    </div>
  )
}