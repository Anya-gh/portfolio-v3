import mail from '../assets/icons/mail.svg'
import github from '../assets/icons/github-mark-white.svg'
import linkedin from '../assets/icons/LI-In-Bug.png'
import circle from '../assets/icons/circle.svg'

export default function Footer() {
  return (
    <div className='w-full px-10 md:px-20 flex flex-col items-center mt-10 pb-10'>
      <Icons />
      <p className='mt-5 text-sm tracking-widest text-slate-500 text-center'>Created by me! You can have a look on GitHub <a href="https://github.com/Anya-gh/portfolio" className='text-slate-300'>here</a>.</p>
    </div>
  )
}

function Icons() {
  return (
    <div className='flex flex-row items-center justify-between w-full'>
      <a href="mailto:anya2718@icloud.com" target="_blank"><img src={mail} className='h-6' alt='mail'/></a>
      <img src={circle} className='h-1 mx-5 opacity-50' alt='circle' />
      <a href="https://github.com/Anya-gh/" target="_blank"><img src={github} className='h-8' alt='mail' /></a>
      <img src={circle} className='h-1 mx-5 opacity-50' alt='circle' />
      <a href="https://www.linkedin.com/in/aniket-singh-dev/" target="_blank"><img src={linkedin} className='h-8' alt='mail' /></a>
    </div>
  )
}
