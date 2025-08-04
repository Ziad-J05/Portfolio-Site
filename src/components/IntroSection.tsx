export default function IntroSection(){
  return (
    <>
        <section className="grid grid-cols-[18em_1fr] grid-rows-[1fr_3em] gap-x-[4px] w-lg mx-auto h-auto mb-[3rem]">
          <h1 className="justify-self-stretch self-center row-start-1 row-end-2 col-start-1 col-end-2 text-5xl ">
            Hello, I'm<span className="block font-bold text-7xl">Ziad</span>
            <span className="block font-bold text-7xl ml-[1em]">Jaafar</span>
          </h1>
          <p className="justify-self-end-safe self-start row-start-2 row-end-3 col-start-1 col-end-2">
            Game developer + software developer based out of Pittsburgh, PA
          </p>
          <img
            className="row-start-1 row-end-2 col-start-2 col-end-3 size-48 object-cover"
            src="/placeholder-photo.jpg"
          />
          <ul className="row-start-2 row-end-3 col-start-2 col-end-3">
            <li>Email</li>
            <li>Resume</li>
          </ul>
        </section>
    </>
  )
}