import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export default function About() {
  return (
    <div className='flex flex-col items-center justify-between h-screen w-screen px-10 py-5 overflow-scroll lg:px-72 2xl:px-[30rem]'>
      <div className='w-full'>
        <NavBar links={[{name: 'HOME'}, {name: 'CONTACT'}, {name: 'BLOG', url: 'https://anya-gh.github.io/blog'}]} />
        <div className='my-10'>
          <h1 className='mt-10 text-4xl md:text-5xl text-left w-full font-bold mb-2'>About</h1>
          <p className="tracking-widest text-xs">Hi! My name's Aniket Singh, and I'm looking for opportunities as a software engineer. Feel free to get in touch.</p>
        </div>
      </div>
      <div className='mb-10'>
        <h2 className='tracking-widest text-2xl text-left w-full font-bold mb-2'>Education</h2>
        <div className='mb-5'>
          <span className="flex flex-row items-baseline justify-between"><h3>University of Warwick</h3><p>2019-2023</p></span>
          <span className="flex flex-row items-baseline justify-between mb-2 text-xs"><p>Computer Science</p><p>MEng - 1st</p></span>
          <p className='text-xs tracking-widest font-light text-zinc-300'>At Warwick, I focused mainly on the mathematics side of Computer Science, studying algorithms and complexity theory, and programming, in a number of different languages. Working on a wide variety of assignments made me a much more confident software engineer, and helped me develop important soft skills like communication and time management. I frequently tutored students in younger years as well, helping them with modules I'd already completed.</p>
        </div>
        <div>
          <span className="flex flex-row items-baseline justify-between"><h3>Northampton School for Boys</h3><p>2017-2019</p></span>
          <span className="flex flex-row items-baseline justify-between mb-2 text-xs"><p>Computer Science, Maths, Further Maths</p><p>A-Levels - A*, A*, A*</p></span>
          <p className='text-xs tracking-widest font-light text-zinc-300'>Northampton School for Boys (NSB) is the Sixth Form at which I completed my A-Levels. I self-studied programming and computer hardware, so I got the most out of my maths classes; they gave me a solid foundation in problem solving, and learning some of the key fundamentals I would need for university. Whilst there I was also a formal tutor for the younger years for maths, and regularly assisted in classrooms.</p>
        </div>
      </div>
      <div>
        <h2 className='tracking-widest text-2xl text-left w-full font-bold mb-2'>Personal</h2>
        <div>
          <span className="flex flex-row items-baseline justify-between"><h3>Japanese</h3><p>JLPT - N3</p></span>
          <p className='text-xs tracking-widest font-light text-zinc-300'>Alongside self-study, I studied Japanese as an optional module at university for 2 years. After doing so, I reached the level of N3 on the Japanese Language Proficiency Test (JLPT), for which N1 is the easiest and N5 is the hardest. Learning Japanese taught me a lot about staying consistent and disciplined, since it's not something you can grasp overnight, and I'm very grateful to have had the opportunity to take classes for it. You can read more about it in my blog here!</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
