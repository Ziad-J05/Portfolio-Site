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

            <h1 className="text-5xl w-4xl mx-auto font-bold mb-2">Project Name</h1>
            <p className="text-4xl w-4xl mx-auto font-regular">Company Name</p>
            <img className='w-6xl h-64 object-cover border-y-2 mt-4 mb-8' src='/placeholder-photo.jpg' />

            <div className='grid w-4xl mx-auto grid-rows-1 grid-cols-[1fr_calc(var(--spacing)*64)]'>
                <div className='col-span-1 col-start-1 text-lg flex flex-col gap-4 w-2xl'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum felis sed velit hendrerit malesuada. Pellentesque varius turpis nec dolor dictum dignissim. Duis dignissim neque dolor, a ullamcorper odio mollis nec. Maecenas eleifend nisl eu ipsum imperdiet, eget gravida ipsum auctor. Aenean consectetur efficitur sagittis. Nulla euismod vel justo ac egestas. Morbi porttitor elit non erat venenatis dictum. Donec ac risus quis justo auctor porttitor quis vel felis. Ut nulla lorem, pellentesque ac magna eget, lobortis suscipit quam.</p>
                    <p>Integer dapibus, lacus vitae dignissim fringilla, mi leo finibus augue, fringilla mattis diam augue eu turpis. Maecenas commodo dui mi, at facilisis nisl porta at. Aliquam rhoncus molestie sapien, eget pretium tortor sollicitudin vel. Fusce sollicitudin massa leo, at condimentum nisl hendrerit non. Fusce vitae magna sagittis, feugiat risus eu, tempor libero. Cras est urna, maximus vitae gravida et, sagittis sed eros. Proin quam felis, aliquam ut justo sit amet, rhoncus placerat massa.</p>
                    <p>Etiam sit amet elit ut urna commodo pulvinar. Praesent et erat at purus accumsan imperdiet. Sed vehicula egestas augue. Phasellus venenatis arcu magna, malesuada tempor erat mollis gravida. Pellentesque sodales tempus orci, ac faucibus ex condimentum quis. Quisque quis erat risus. Sed laoreet est ut quam sodales, quis sodales urna convallis. Etiam sed tortor sit amet enim suscipit viverra eget vel arcu. Suspendisse accumsan nibh ipsum, eu volutpat tellus condimentum sed.</p>
                </div>
                <div className='px-12 w-fit col-span-1 col-start-2 justify-self-center flex flex-col gap-8'>
                    <LinkButton text='Sample' link='#'/>
                    <LinkButton text='Github' link='#'/>
                </div>
            </div>            

            <h2 className="text-5xl font-semibold mb-[1rem] mx-auto mt-8 w-4xl">Process</h2>

            <div className='grid grid-auto-rows-auto grid-cols-2 gap-4 w-4xl mx-auto '>
                <div className='relative top-0 left-0 h-96 hover:h-fit overflow-hidden rounded-lg border-2 bg-white'>
                    <img className='object-cover w-fit h-96' src="/placeholder-photo.jpg"></img>
                    <p className='text-lg py-1 px-2'>Hello! This is description text</p>
                </div>
                
                <div className='relative top-0 left-0 h-96 hover:h-fit overflow-hidden rounded-lg border-2 bg-white'>
                    <img className='object-cover w-fit h-96' src="/placeholder-photo.jpg"></img>
                    <p className='text-lg py-1 px-2'>Hello! This is description text</p>
                </div>

                <div className='relative top-0 left-0 h-96 hover:h-fit overflow-hidden rounded-lg border-2 bg-white'>
                    <img className='object-cover w-fit h-96' src="/placeholder-photo.jpg"></img>
                    <p className='text-lg py-1 px-2'>Hello! This is description text</p>
                </div>
            </div>
        </main>

        <footer className="mx-auto text-lg w-6xl py-4 bg-[#F7EDE2] text-black border-2 border-b-0">
            <p className='w-2xl mx-auto text-center'>&copy;2025 Ziad Jaafar - Made with React and Tailwind</p>
        </footer>
    </>
  )
}