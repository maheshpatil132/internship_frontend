import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Common/Home/Content'
const Home = () => {
  return (
    <div className=' flex-1'>
        <Header/>
        <div className="main flex">
            <Content user='seller' />
        </div>
    </div>
  )
}

export default Home