import './index.css'

function Footer(){
  return(
    <>
      {/* Contact */}
      <footer
        id="contact"
        className="mx-auto w-4xl pt-[1rem] pb-[3rem] bg-slate-700"
      >
        <h2 className="text-5xl w-2xl mx-auto mb-[1rem] text-white">Contact</h2>
        <ul className="w-2xl mx-auto">
          <li>
            <p className="text-white">Email</p>
          </li>
          <li>
            <p className="text-white">Phone</p>
          </li>
          <li>
            <a className="text-white hover:underline">LinkedIn</a>
          </li>
          <li>
            <a className="text-white hover:underline">GitHub</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer