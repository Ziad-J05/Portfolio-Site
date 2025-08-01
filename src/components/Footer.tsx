import '../index.css'

function Footer(){
  return(
    <>
      {/* Contact */}
      <footer className="mx-auto w-4xl pt-[1rem] pb-[3rem] bg-slate-700">
        <ul className="w-2xl mx-auto flex gap-4 justify-center">
          <li>
            <a href="/" className="text-white hover:underline">Home</a>
          </li>
          <li>
            <a href="/projects" className="text-white hover:underline">Projects</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:underline">Contact</a>
          </li>
        </ul>

        <ul className="w-2xl mx-auto flex gap-4 justify-center">
          <li>
            <a href="" className="text-white hover:underline">Resume</a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">LinkedIn</a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">GitHub</a>
          </li>
        </ul>
        
        <hr className='w-2xl text-white mx-auto my-4'></hr>
        <p className='w-2xl mx-auto text-white text-center'>&copy;2025 Ziad Jaafar - Made with React and Tailwind</p>
      </footer>
    </>
  )
}

export default Footer