import { ReactElement } from 'react';
import '../index.css'

function MainContentArea({content}: {content: ReactElement[]}){

  return(
    <>
      <main className="bg-[#ffffff] py-36 mx-auto md:w-2xl lg:w-full">
          {content}
      </main>
    </>
  )
}

export default MainContentArea