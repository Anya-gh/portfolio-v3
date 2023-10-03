import { Dispatch, SetStateAction } from "react"
type TagsProps = {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>
}

export default function TagsList({filteredTags, setFilteredTags} : TagsProps) {

  return (
    <div className='flex flex-col mt-5 px-10 w-full'>
      <div className='flex flex-row overflow-scroll lg:overflow-visible mb-2 w-full'>
        {Tags.topics.map(tag => {return <Tag key={tag.name} name={tag.name} color={tag.color} filteredTags={filteredTags} setFilteredTags={setFilteredTags}/>})}
      </div>
      <div className='flex flex-row overflow-scroll lg:overflow-visible w-full'>
        {Tags.tools.map(tag => {return <Tag key={tag.name} name={tag.name} color={tag.color} filteredTags={filteredTags} setFilteredTags={setFilteredTags}/>})}
      </div>
    </div>
  )
}

type TagProps = {
  color: string,
  name: string,
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>
}

function Tag({color, name, filteredTags, setFilteredTags} : TagProps) {

  const onClickHandler = () => {
    if (filteredTags.includes(name)) { setFilteredTags(currentTags => currentTags.filter(tag => tag != name)) }
    else { setFilteredTags(currentTags => [...currentTags, name]) }
  }

  return (
    <span className='m-auto'><button onClick={onClickHandler} className={`${color} p-2 md:p-3 whitespace-nowrap mx-2 rounded-xl md:rounded-2xl tracking-widest font-bold text-left text-[0.6rem] md:text-xs lg:hover:scale-110 transition duration-200 ` + (filteredTags.includes(name) ? 'text-white' : 'text-black')}>{name}</button></span>
  )
}

/*type TagType = {
  name: string,
  color: string
}

type TagsType = {
  topics: TagType[],
  tools: TagType[]
}*/

export const Tags = {
  topics: [
    {
      name: "Machine Learning",
      color: "bg-sky-400"
    },
    {
      name: "Web Development",
      color: "bg-emerald-400"
    },
    {
      name: "Data Processing",
      color: "bg-violet-400"
    },
    {
      name: "Algorithm Design",
      color: "bg-pink-400"
    }
  ],
  tools: [
  {
    name: "Python",
    color: "bg-sky-400"
  },
  {
    name: "PyTorch",
    color: "bg-sky-400"
  },
  {
    name: "React",
    color: "bg-emerald-400"
  },
  {
    name: "TypeScript",
    color: "bg-emerald-400"
  },
  {
    name: "Tailwind",
    color: "bg-emerald-400"
  },
  {
    name: "SQL",
    color: "bg-violet-400"
  },
  {
    name: "C",
    color: "bg-violet-400"
  }]
} as const