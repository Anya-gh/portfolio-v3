import NavBar from "../../components/NavBar"
import mail from '../../assets/icons/mail.svg'
import github from '../../assets/icons/github-mark-white.svg'
import linkedin from '../../assets/icons/LI-In-Bug.png'

export default function Contact() {
  return (
    <div className='flex flex-col items-center h-screen w-screen justify-between px-10 py-5'>
        <div>
        <NavBar links={[{name: 'HOME'}, {name: 'ABOUT'}, {name: 'BLOG', url: 'https://anya-gh.github.io/blog'}]} />
          <div className='my-10'>
            <h1 className='mt-10 text-4xl text-left w-full font-bold mb-2'>Contact</h1>
            <p className="tracking-widest text-xs">I'm happy to discuss more than just software engineering, so don't hesitate to get in touch:</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-60">
          <span><h1 className='tracking-widest text-xl'>Email</h1><p className='text-xs'>anya2718@icloud.com</p></span>
          <a href='mailto:anya2718@icloud.com'><img src={mail} alt='mail' className='w-10 h-auto'/></a>
        </div>
        <div className="flex flex-row items-center justify-between w-60">
          <span><h1 className='tracking-widest text-xl'>GitHub</h1><p className='text-xs'>github.com/Anya-gh</p></span>
          <a href='github.com/Anya-gh'><img src={github} alt='github' className='w-10 h-auto'/></a>
        </div>
        <div className="flex flex-row items-center justify-between w-60">
          <span><h1 className='tracking-widest text-xl'>LinkedIn</h1><p className='text-xs'>linkedin.com/in/aniket-singh-dev</p></span>
          <a href='linkedin.com/in/aniket-singh-dev'><img src={linkedin} alt='linkedin' className='w-10 h-auto'/></a>
        </div>
        <p className='tracking-widest'>Thanks for taking a look!</p>
        <p className='mt-5 text-sm tracking-widest text-slate-500 text-center'>Created by me! You can have a look on GitHub <a href="https://github.com/Anya-gh/portfolio" className='text-slate-300'>here</a>.</p>
      </div>
  )
}
