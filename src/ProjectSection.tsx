import './index.css'
import { 
  Card, 
  Badge,
  createTheme, 
  ThemeProvider 
} from "flowbite-react";

const cardTheme = createTheme({
  card: {
    root: {
      "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      "children": "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        "off": "flex-col",
        "on": "flex-col md:max-w-2xl md:flex-row"
      },
      "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    img: {
      "base": "",
      horizontal: {
        off: "rounded-t-lg h-64 object-cover",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
  }
});

export default function ProjectSection(){
  return(
    <>
      {/* Projects */}
        <section id="projects" className="w-2xl mx-auto">
          <h2 className="text-5xl mb-[1rem]">Projects</h2>
          {/* Featured Project */}
          <ThemeProvider theme={cardTheme}>
            <Card
              className="max-w-2xl"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?s=612x612&w=0&k=20&c=hiI3ib9ibDxAgqEZEH09EO3JOw94v5xh6hzcuXGhO-M="
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Project Name
                  </h3>
                  <p className="text-2xl text-gray-700 dark:text-gray-400 mb-0">
                  Role
                  </p>
                </div>

                <div className="flex gap-2 my-0.5">
                    <Badge color="info">Default</Badge>
                    <Badge color="info">Default</Badge>
                </div>
                
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis dui sit amet tellus efficitur, non tincidunt felis vulputate. Vestibulum sed justo nibh.
                </p>
                <a className="hover:underline" href="#">More info</a>
              </div>
            </Card>
            

          {/* All Projects */}
          <Card
            className="max-w-2xl"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?s=612x612&w=0&k=20&c=hiI3ib9ibDxAgqEZEH09EO3JOw94v5xh6hzcuXGhO-M="
            horizontal
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Project Name
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-400 mb-0">
              Role
              </p>
              <div className="flex gap-2 my-0.5">
                  <Badge color="info">Default</Badge>
                  <Badge color="info">Default</Badge>
              </div>
              <a className="hover:underline" href="#">More info</a>
            </div>
          </Card>

          </ThemeProvider>
          
        </section>
    </>
  )
}