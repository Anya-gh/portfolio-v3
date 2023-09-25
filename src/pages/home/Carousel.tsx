import { useState, useEffect } from "react"
import { Projects, ProjectsType } from "./Projects"
import circle from '../../assets/icons/circle.svg'
import blogicon from '../../assets/icons/blog-icon.svg'

type CaruouselType = {
  filteredTags: string[]
}

export default function Carousel({filteredTags} : CaruouselType) {

  const [active, setActive] = useState(0)
  const [filteredProjects, setFilteredProjects] = useState(Projects)
  const [touchStart, setTouchStart] = useState<null | number>(null)
  const [touchEnd, setTouchEnd] = useState<null | number>(null)
  const [mediumScreen, setMediumScreen] = useState(window.matchMedia("(min-width: 800px)").matches)

  const updateActive = (direction:string) => {
    if (direction === 'left') {
      setActive(active => active - 1 < 0 ? filteredProjects.length - 1 : active - 1)
    }
    else if (direction === 'right') {
      setActive(active => active + 1 > filteredProjects.length - 1 ? 0 : active + 1)
    }
    else {
      console.error('Invalid direction.')
    }
  }

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStart = (e : React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e : React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    // if someone swipes right, they want it to get to the left project
    const direction = distance > minSwipeDistance ? 'right' : 'left'
    updateActive(direction)
  }

  useEffect(() =>
  window
  .matchMedia("(min-width: 800px)")
  .addEventListener('change', e => setMediumScreen( e.matches ))
  )

  useEffect(() => {
    const newFilteredProjects = Projects.filter(project => filteredTags.every(tag => project.tags.includes(tag)) || filteredTags.length === 0)
    setFilteredProjects(newFilteredProjects)
    setActive(0)
  }, [filteredTags])

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className='mt-10 mb-2'>
      <div className="flex flex-row items-center">
      <button className='mr-5' onClick={() => updateActive('left')}>{mediumScreen && filteredProjects.length > 0 && <SideProject name={filteredProjects[active-1 > -1 ? active-1 : filteredProjects.length - 1].name} description={filteredProjects[active-1 > -1 ? active-1 : filteredProjects.length - 1].description} />}</button>
      {filteredProjects.length > 0 ? <Project name={filteredProjects[active].name} tags={filteredProjects[active].tags} description={filteredProjects[active].description} blog={filteredProjects[active].blog}/> : <p>Sorry, no projects matching these tags!</p>}
      <button className='ml-5' onClick={() => updateActive('right')}>{mediumScreen && filteredProjects.length > 0 && <SideProject name={filteredProjects[active+1 > filteredProjects.length - 1 ? 0 : active+1].name} description={filteredProjects[active+1 > filteredProjects.length - 1 ? 0 : active+1].description} />}</button>
      </div>
      <div className='flex flex-row items-center justify-evenly my-5 px-2'>
        {filteredProjects.map((_, index) => {
          return <button key={index} onClick={() => {setActive(index)}}><img src={circle} className={'mx-1 ' + (active === index ? 'h-3' : 'h-2')}/></button>
        })}
      </div>
    </div>
  )
}
function Project({name, tags, description, blog} : ProjectsType) {
  return (
    <div className='rounded-xl border-zinc-500 overflow-hidden border-[1px]'>
      <div className='h-20 md:h-28 bg-black opacity-70'>
        <div className='h-full bg-sunset bg-cover bg-center flex flex-col items-end'>        
          {blog !== undefined && <a href={blog}><img src={blogicon} alt='blog' className='p-4 h-14'/></a>}
        </div>
      </div>
      <div className='w-60 md:w-72 p-2'>
        <h1 className='font-bold tracking-widest text-royalgold'>{name}</h1>
        <div className='flex flex-row overflow-scroll w-full'>
          {tags.map(tag => 
              <ProjectTag key={tag} color='bg-emerald-400' name={tag}/>
          )}
        </div>
        <p className="tracking-widest font-light text-xs overflow-scroll h-20">{description}</p>
      </div>
    </div>
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
  description: string
}

function SideProject({name, description} : SideProjectProps) {
  return (
      <div className='rounded-xl border-zinc-500 overflow-hidden border-[1px]'>
        <div className='h-20 bg-black opacity-70'>
          <div className='h-full bg-sunset bg-cover bg-center flex flex-col items-end'>        
          </div>
        </div>
        <div className='w-40 p-2'>
          <h1 className='font-bold tracking-widest text-royalgold text-xs h-9'>{name}</h1>
          <p className="tracking-widest font-light text-xs overflow-scroll h-16">{description}</p>
        </div>
      </div>
  )
}