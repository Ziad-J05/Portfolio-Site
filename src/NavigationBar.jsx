import './index.css'

function NavigationBar(){
  return (
    <>
    {/* Nav Bar */}
      <header className="fixed top-[0px] left-[0px] w-full">
        <nav className="px-[1em] py-[0.5em] mx-auto w-2xl mt-[1rem] bg-white rounded-xs shadow-md">
          <ul className="flex justify-evenly gap-x-[1em]">
            <li>
              <a className="text-xl hover:underline" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="text-xl hover:underline" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="text-xl hover:underline" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="text-xl hover:underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar