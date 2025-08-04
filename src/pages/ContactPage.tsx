import '../index.css'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

export default function ContactPage() {

  return (
    <>
      
      <NavigationBar />
        <main className="bg-[#ffffff] py-36 mx-auto w-4xl">
            <div className="w-2xl mx-auto pt-4">
                <h2 className="text-5xl mb-[1rem]">Contact Me</h2>
                <div className='grid grid-cols-2 grid-rows-1'>
                  
                  <ul className='flex flex-col'>
                    <li>Email: <a href="mailto:ziadjaafar05@gmail.com">ziadjaafar05@gmail.com</a></li>
                    <li>Phone: <a href="tel:+17243935879">&#40;+1&#41; 724-393-5879</a></li>
                  </ul>

                  <ul className='flex flex-col'>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/ziad-jaafar222/">linkedin.com/in/ziad-jaafar222</a></li>
                    <li>GitHub: <a href="https://github.com/Ziad-J05">github.com/Ziad-J05</a></li>
                  </ul>

                </div>

                <p><a>Resume</a></p>

            </div>
        </main>
      <Footer />

    </>
  )
}