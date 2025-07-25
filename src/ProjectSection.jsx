import './index.css'
import { Card } from "flowbite-react";
import { Badge } from "flowbite-react";


export function ProjectSection(){
  return(
    <>
      {/* Projects */}
        <section id="projects" className="w-2xl mx-auto">
            <h2 className="text-5xl mb-[1rem]">Projects</h2>
            {/* Featured Project */}

            <Card
                className="max-w-2xl"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/image.png"
                >
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Project Name
                    </h3>
                    <div className="flex gap-2 my-0.5">
                        <Badge color="info">Default</Badge>
                        <Badge color="info">Default</Badge>
                    </div>

                    <p className="text-xl text-gray-700 dark:text-gray-400 mb-0">
                    Role
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Details
                    </p>
                    <a className="hover:underline" href="#">More info</a>
                </div>
            </Card>

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