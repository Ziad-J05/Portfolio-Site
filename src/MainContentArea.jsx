import './index.css'

function IntroSection(){
  return (
    <>
      {/* Intro */}
        <section className="grid grid-cols-[18em_1fr] grid-rows-[1fr_3em] gap-x-[4px] w-lg mx-auto h-auto mb-[3rem] mt-[6rem]">
          <h1 className="justify-self-stretch self-center row-start-1 row-end-2 col-start-1 col-end-2 text-5xl ">
            Hello, I'm<span className="block font-bold text-7xl">Ziad</span>
            <span className="block font-bold text-7xl ml-[1em]">Jaafar</span>
          </h1>
          <p className="justify-self-end-safe self-start row-start-2 row-end-3 col-start-1 col-end-2">
            Game developer + software developer based out of Pittsburgh, PA
          </p>
          <img
            className="row-start-1 row-end-2 col-start-2 col-end-3 w-48"
            src="img/placeholder-photo.png"
          />
          <ul className="row-start-2 row-end-3 col-start-2 col-end-3">
            <li>Email</li>
            <li>Resume</li>
          </ul>
        </section>
    </>
  )
}

function AboutSection(){
  return(
    <>
      {/* About */}
        <section className="w-2xl mx-auto mb-[3rem]">
          <h2 className="text-5xl mb-[1rem]">About</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum
            magna ut nulla rhoncus, quis aliquam lacus rhoncus. Nunc eget purus
            sollicitudin, laoreet libero nec, eleifend neque.
          </p>
        </section>
    </>
  )
}

function SkillsSection(){
  return(
    <>
      {/* Skills */}
        <section id="skills" className="w-2xl mx-auto mb-[3rem]">
          <h2 className="text-5xl mb-[1rem]">Skills</h2>
          <div className="grid grid-cols-4 grid-rows-2 gap-[4px]">
            <div className="flex items-center border rounded-xs p-[0.5em]">
              <img className="" src="img/photo-not-here" />
              <p>Skill Name</p>
            </div>
            <div className="flex items-center border rounded-xs p-[0.5em]">
              <img className="" src="img/photo-not-here" />
              <p>Skill Name</p>
            </div>
            <div className="flex items-center border rounded-xs p-[0.5em]">
              <img className="" src="img/photo-not-here" />
              <p>Skill Name</p>
            </div>
            <div className="flex items-center border rounded-xs p-[0.5em]">
              <img className="" src="img/photo-not-here" />
              <p>Skill Name</p>
            </div>
            <div className="flex items-center border rounded-xs p-[0.5em]">
              <img className="" src="img/photo-not-here" />
              <p>Skill Name</p>
            </div>
            <div className="flex items-center border rounded-xs p-[0.5em]">
              <img className="" src="img/photo-not-here" />
              <p>Skill Name</p>
            </div>
            <div className="flex items-center border rounded-xs p-[0.5em]">
              <img className="" src="img/photo-not-here" />
              <p>Skill Name</p>
            </div>
          </div>
        </section>
    </>
  )
}

function ExperienceSection(){
  return(
    <>
    {/* Experience */}
        <section id="experience" className="w-2xl mx-auto mb-[3rem]">
          <h2 className="text-5xl mb-[1rem]">Experience</h2>
          <ol>
            <li className="mt-[1em]">
              <h3 className="text-2xl font-semibold">
                Job Title <span className="font-normal">Date</span>
              </h3>
              <ul className="list-disc list-inside">
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
              </ul>
            </li>
            <li className="mt-[1em]">
              <h3 className="text-2xl font-semibold">
                Job Title <span className="font-normal">Date</span>
              </h3>
              <ul className="list-disc list-inside">
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
              </ul>
            </li>
            <li className="mt-[1em]">
              <h3 className="text-2xl font-semibold">
                Job Title <span className="font-normal">Date</span>
              </h3>
              <ul className="list-disc list-inside">
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
                <li className="ml-[0.5em]">Detail</li>
              </ul>
            </li>
          </ol>
        </section>
    </>
  )
}

function ProjectSection(){
  return(
    <>
      {/* Projects */}
        <section id="projects" className="w-2xl mx-auto">
          <h2 className="text-5xl mb-[1rem]">Projects</h2>
          {/* Featured Project */}
          <div className="grid grid-rows-[64_1fr] grid-cols-1 mb-[1.5rem]">
            <img
              className="h-64 w-2xl object-cover"
              src="img/placeholder-photo -portfolio.png"
            />
            <div className="flex flex-col bg-slate-300 p-[8px]">
              <h3 className="text-3xl font-semibold">Project Name</h3>
              <p className="text-xl">Role</p>
              <ul className="flex gap-x-[4px]">
                <li className="border rounded-xs px-[0.5em] text-xl">Skill</li>
                <li className="border rounded-xs px-[0.5em] text-xl">Skill</li>
                <li className="border rounded-xs px-[0.5em] text-xl">Skill</li>
              </ul>
              <a className="text-xl hover:underline mt-auto" href="#">
                More details
              </a>
            </div>
          </div>
          {/* All Projects */}
          <div className="flex flex-col gap-y-[4px]">
            <div className="grid grid-cols-[240px_1fr] grid-rows-1">
              <img
                className="w-[240px]"
                src="img/placeholder-photo -portfolio.png"
              />
              <div className="flex flex-col ml-[4px] bg-slate-300 p-[4px]">
                <h3 className="text-xl font-semibold">Project Name</h3>
                <p>Role</p>
                <ul className="flex gap-x-[4px]">
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                </ul>
                <a className="hover:underline mt-auto" href="#">
                  More details
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[240px_1fr] grid-rows-1">
              <img
                className="w-[240px]"
                src="img/placeholder-photo -portfolio.png"
              />
              <div className="flex flex-col ml-[4px] bg-slate-300 p-[4px]">
                <h3 className="text-xl font-semibold">Project Name</h3>
                <p>Role</p>
                <ul className="flex gap-x-[4px]">
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                </ul>
                <a className="hover:underline mt-auto" href="#">
                  More details
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[240px_1fr] grid-rows-1">
              <img
                className="w-[240px]"
                src="img/placeholder-photo -portfolio.png"
              />
              <div className="flex flex-col ml-[4px] bg-slate-300 p-[4px]">
                <h3 className="text-xl font-semibold">Project Name</h3>
                <p>Role</p>
                <ul className="flex gap-x-[4px]">
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                  <li className="border rounded-xs px-[0.5em]">Skill</li>
                </ul>
                <a className="hover:underline mt-auto" href="#">
                  More details
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

function MainContentArea(){
  return(
    <>
      <main className="bg-slate-200 pt-[3rem] pb-[3rem] mx-auto w-4xl">

          <IntroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectSection />
          
        </main>
    </>
  )
}

export default MainContentArea