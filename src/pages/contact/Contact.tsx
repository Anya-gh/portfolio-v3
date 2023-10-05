import NavBar from "../../components/NavBar"
import mail from '../../assets/icons/mail.svg'
import github from '../../assets/icons/github-mark-white.svg'
import linkedin from '../../assets/icons/LI-In-Bug.png'
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.5}}}>
      <div className='flex flex-col items-center h-screen w-screen justify-between px-10 py-5 lg:px-72 2xl:px-[30rem]'>
        <div className='w-full'>
        <NavBar links={[{name: 'HOME'}, {name: 'ABOUT'}, {name: 'BLOG', url: 'https://anya-gh.github.io/blog'}]} />
          <div className='my-10'>
            <h1 className='mt-10 text-4xl md:text-5xl text-left w-full font-bold mb-2'>Contact</h1>
            <p className="tracking-widest text-xs">I'm happy to discuss more than just software engineering, so don't hesitate to get in touch:</p>
          </div>
        </div>
        <Link name='Email' href='mailto:anya2718@icloud.com' link='anya2718@icloud.com' icon={mail}/>
        <Link name='GitHub' href='https://github.com/Anya-gh' link='github.com/Anya-gh' icon={github} />
        <Link name='LinkedIn' href='https://linkedin.com/in/aniket-singh-dev' link='linkedin.com/in/aniket-singh-dev' icon={linkedin} />
        <p className='tracking-widest'>Thanks for taking a look!</p>
        <p className='mt-5 text-sm tracking-widest text-slate-500 text-center'>Created by me! You can have a look on GitHub <a href="https://github.com/Anya-gh/portfolio" className='text-slate-300'>here</a>.</p>
      </div>
    </motion.div>
  )
}

type LinkProps = {
  name: string,
  link: string,
  href?: string,
  icon: string
}

function Link({name, link, href, icon} : LinkProps) {
  return (
    <div className="flex flex-row items-center justify-between w-60 md:w-[25rem] lg:hover:scale-105 duration-200 lg:opacity-70 lg:hover:opacity-100">
      <span><h1 className='tracking-widest text-xl md:text-3xl'>{name}</h1><p className='text-xs md:text-sm'>{link}</p></span>
      <a href={href ? href : link} target="_blank"><img src={icon} alt={name.toLowerCase()} className='w-10 md:w-14 h-auto'/></a>
    </div>
  )
}
