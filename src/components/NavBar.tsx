import { useNavigate } from "react-router-dom"

type NavBarType = {
  links: {name: string, url?: string}[]
}

export default function NavBar({links} : NavBarType) {

  const navigate = useNavigate()

  const onClickHandler = (name:string) => {
    if (name === 'HOME') {
      navigate('/')
    }
    else {
      navigate(`/${name.toLowerCase()}`)
    }
  }

  return (
    <div className='flex flex-row items-center justify-between w-full'>
      {links.map(link => {return (link.url ? <a key={link.name} href={link.url} target="_blank"><h1 className='text-royalgold tracking-widest font-bold lg:hover:brightness-125 transition duration-200'>{link.name}</h1></a> : <button key={link.name} onClick={() => onClickHandler(link.name)}><h1 className='text-royalgold tracking-widest font-bold lg:hover:brightness-125 transition duration-200'>{link.name}</h1></button>)})}
    </div>
  )
}
