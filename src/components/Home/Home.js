import React from 'react'
import Content from './Content'
import Navbar from '../Navbar'
import Header from '../Header'
const Home = () => {
  return (
    <div>
        <Header/>
        <div className="main flex">
            <Navbar/>
            <Content user='seller' />
        </div>
    </div>
  )
}

export default Home