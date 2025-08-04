import { ReactElement } from 'react';
import '../index.css'

function MainContentArea({content}: {content: ReactElement[]}){

  return(
    <>
      <main className="bg-[#ffffff] py-36 mx-auto w-4xl">
          {content}
      </main>
    </>
  )
}

export default MainContentArea