import { ReactElement } from 'react';
import '../index.css'

interface MainContentAreaProps{
  width: string
  content: ReactElement[]
}

function MainContentArea({width, content}: MainContentAreaProps){

  const mainClass:string = "bg-[#F7EDE2] px-4 py-36 mx-auto w-fill lg:px-0 lg:w-4xl 2xl:w-6xl min-h-[calc(100vh-var(--text-lg)-8*var(--spacing))] lg:border-l-2 lg:border-r-2"

  return(
    <>
      <main className={mainClass}>
          {content}
      </main>
    </>
  )
}

export default MainContentArea