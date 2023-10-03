import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
import TagsList from './TagsList'
import Carousel from './Carousel'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

export default function Home() {

  const [filteredTags, setFilteredTags] = useState<string[]>([])

  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen justify-between px-10 py-5 lg:px-80'>
        <NavBar links={[{name: 'ABOUT'}, {name: 'CONTACT'}, {name: 'BLOG', url: 'https://anya-gh.github.io/blog'}]} />
        <div className='flex flex-col md:flex-row items-center mt-10'>
          <img src={logo} className='mb-2 md:mb-0 md:mr-5 h-40 lg:h-52'/>
          <span className='flex flex-col font-bold md:mb-8'><h1 className='tracking-widest text-4xl lg:text-5xl'>Aniket Singh</h1><h2 className='text-royalgold text-2xl lg:text-3xl'>Software Engineer</h2></span>
        </div>
        <TagsList filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
        <Carousel filteredTags={filteredTags}/>
        <Footer />
      </div>
    </>
  )
}
