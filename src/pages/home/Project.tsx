import blogicon from '../../assets/icons/blog-icon.svg'
import { ProjectsType } from './Projects'
import { Tags } from './TagsList'

export default function Project({name, tags, description, blog} : ProjectsType) {

  const getColor = (name:string) => {
    const tags = [...Tags['topics'], ...Tags['tools']].filter(tag => tag.name === name)
    if (tags.length === 0) {
      console.error('No tags with this name.')
    }
    return tags[0].color
  }

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
              <ProjectTag key={tag} color={getColor(tag)} name={tag}/>
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

export function SideProject({name, description} : SideProjectProps) {
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