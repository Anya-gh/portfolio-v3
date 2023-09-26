import { useState, useEffect } from "react"
import { Projects } from "./Projects"
import circle from '../../assets/icons/circle.svg'
import Project, { SideProject } from "./Project"

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
      { // left project
        mediumScreen && filteredProjects.length > 0 && <button className='mr-5' onClick={() => updateActive('left')}><SideProject name={filteredProjects[active-1 > -1 ? active-1 : filteredProjects.length - 1].name} description={filteredProjects[active-1 > -1 ? active-1 : filteredProjects.length - 1].description} /></button>
      }
      { // center project
        filteredProjects.length > 0 ? <Project name={filteredProjects[active].name} tags={filteredProjects[active].tags} description={filteredProjects[active].description} blog={filteredProjects[active].blog}/> : <p>Sorry, no projects matching these tags!</p>
      }
      { // right project
        mediumScreen && filteredProjects.length > 0 && <button className='ml-5' onClick={() => updateActive('right')}><SideProject name={filteredProjects[active+1 > filteredProjects.length - 1 ? 0 : active+1].name} description={filteredProjects[active+1 > filteredProjects.length - 1 ? 0 : active+1].description} /></button>
      }
      </div>
      <div className='flex flex-row items-center justify-evenly my-5 px-2'>
        {filteredProjects.map((_, index) => {
          return <button key={index} onClick={() => {setActive(index)}}><img src={circle} className={'mx-1 ' + (active === index ? 'h-3' : 'h-2')}/></button>
        })}
      </div>
    </div>
  )
}