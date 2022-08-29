import React from 'react'
import Content from './Content'
import Navbar from '../Navbar'
const Home = () => {
  return (
    <div>
        <header className='p-3 border header z-50 absolute w-full bg-white'>Navigation will be here...</header>
        <div className="main flex">
            <Navbar/>
            <Content user='seller' />
        </div>
    </div>
  )
}

export default Home