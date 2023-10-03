import blogicon from '../../assets/icons/blog-icon.svg'
import { ProjectsType } from './Projects'
import { Tags } from './TagsList'
import { useState, useEffect } from 'react'
import { themes } from '../../components/Themes'
import { motion } from 'framer-motion'

export default function Project({name, tags, description, blog, theme} : ProjectsType) {

  const [bg, setBg] = useState('')
  const [credit, setCredit] = useState<undefined | string>(undefined)

  useEffect(() => {
    console.log(theme)
    if (theme && themes[theme] !== undefined) {
      setBg(themes[theme].style)
      console.log(themes[theme].style)
      setCredit(themes[theme].credit)
    }
    else {
      setBg(themes['default'].style)
      setCredit(themes['default'].credit)
    }
  }, [theme])

  const getColor = (name:string) => {
    const tags = [...Tags['topics'], ...Tags['tools']].filter(tag => tag.name === name)
    if (tags.length === 0) {
      console.error('No tags with this name.')
    }
    return tags[0].color
  }

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1}}}
    exit={{opacity: 0, transition: {duration: 1}}}
    key={name}
    >
      <div className='rounded-xl border-zinc-500 overflow-hidden border-[1px] w-60 md:w-72 '>
        <div className='h-20 md:h-28 bg-black opacity-70'>
          <div className={`h-full flex flex-col items-end ${bg}`}>        
            {blog !== undefined && <a href={blog}><img src={blogicon} alt='blog' className='p-4 h-14 lg:hover:scale-110 transition duration-300'/></a>}
          </div>
        </div>
        <div className='p-2'>
          <h1 className='font-bold tracking-widest text-royalgold whitespace-nowrap overflow-scroll'>{name}</h1>
          <div className='flex flex-row overflow-scroll w-full'>
            {tags.map(tag => 
                <ProjectTag key={tag} color={getColor(tag)} name={tag}/>
            )}
          </div>
          <div className='h-20 overflow-scroll'>
          <p className="tracking-widest font-light text-xs mb-1">{description}</p>
          {credit && <p className='text-xs tracking-widest font-light text-zinc-400'>{credit}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

type ProjectTagProps = {
  color: string,
  name: string
}

function ProjectTag({color, name} : ProjectTagProps) {
  return (
    <div className={`${color} p-2 m-1 rounded-xl tracking-widest font-bold text-left text-[0.5rem] text-white flex flex-row items-center whitespace-nowrap`}>{name}</div>
  )
}

type SideProjectProps = {
  name: string,
  description: string,
  theme?: string
  tags: string[]
}

export function SideProject({name, description, theme, tags} : SideProjectProps) {

  const [bg, setBg] = useState('')
  const [credit, setCredit] = useState<undefined | string>(undefined)

  useEffect(() => {
    console.log(theme)
    if (theme && themes[theme] !== undefined) {
      setBg(themes[theme].style)
      console.log(themes[theme].style)
      setCredit(themes[theme].credit)
    }
    else {
      setBg(themes['default'].style)
      setCredit(themes['default'].credit)
    }
  }, [theme])

  const getColor = (name:string) => {
    const tags = [...Tags['topics'], ...Tags['tools']].filter(tag => tag.name === name)
    if (tags.length === 0) {
      console.error('No tags with this name.')
    }
    return tags[0].color
  }

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1}}}
    exit={{opacity: 0, transition: {duration: 1}}}
    key={name}
    >
      <div className='rounded-xl border-zinc-500 overflow-hidden border-[1px] w-40 text-left'>
        <div className='h-20 bg-black opacity-70'>
          <div className={`h-full flex flex-col items-end ${bg}`}>        
          </div>
        </div>
        <div className='p-2'>
          <h1 className='font-bold tracking-widest text-royalgold text-xs whitespace-nowrap overflow-scroll'>{name}</h1>
          <div className='flex flex-row overflow-scroll w-full'>
            {tags.map(tag => 
                <ProjectTag key={tag} color={getColor(tag)} name={tag}/>
            )}
          </div>
          <div className='h-16 overflow-scroll'>
            <p className="tracking-widest font-light text-xs mb-1">{description}</p>
            {credit && <p className='text-xs tracking-widest font-light text-zinc-400'>{credit}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}