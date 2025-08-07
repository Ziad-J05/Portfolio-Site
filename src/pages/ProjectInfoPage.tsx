import '../index.css'
import NavigationBar from '../components/NavigationBar'
import LinkButton from '../components/LinkButton'
import MainContentArea from '../components/MainContentArea'
import ContentContainer from '../components/ContentContainer'
import { SectionHeading } from '../components/Headings'
import Footer from '../components/Footer'

export default function ProjectInfoPage() {

  return (
    <>
        <NavigationBar />

        <main className="bg-[#F7EDE2] py-36 mx-auto w-6xl min-h-[calc(100vh-var(--text-lg)-8*var(--spacing))] border-l-2 border-r-2">

            <h2 className="text-5xl w-5xl mx-auto font-bold mb-2">Project Name</h2>
            <p className="text-4xl w-5xl mx-auto font-regular mb-4">Company Name</p>
            <img className='w-6xl h-64 object-cover border-y-2 ' src='/placeholder-photo.jpg' />

            <div className='grid w-5xl mx-auto grid-rows-1 grid-auto-cols-auto'>
                <p className='col-span-1 col-start-1 text-lg'>Sample text lorem ipsom odor onion Shrek.</p>
                <div className='px-12 w-fit col-span-1 col-start-2'><LinkButton text='Sample' link='#'/></div>
            </div>
        </main>

        <footer className="mx-auto text-lg w-6xl py-4 bg-[#F7EDE2] text-black border-2 border-b-0">
            <p className='w-2xl mx-auto text-center'>&copy;2025 Ziad Jaafar - Made with React and Tailwind</p>
        </footer>
    </>
  )
}