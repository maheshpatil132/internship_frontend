import React, { useEffect, useRef, useState } from 'react'
import Box from '../../components/Box'
import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Bid from '../../components/Bid'
import SearchBox from '../../components/Home/SearchBox'
import Navbar from '../../components/Navbar'

const Bidding = () => {

    const [change, setChange] = useState(false)

    const content = useRef()
    const searchbar = useRef()


    useEffect(() => {
        content.current.addEventListener('scroll', () => {
            var rect = searchbar.current.getBoundingClientRect();

            if (rect.top < 70) {
                setChange(true)
            }
            if (rect.top > 70) {
                setChange(false)
            }

        })
    }, [])
    return (
        <div>
            <Header />
            <div className="flex">
                <Navbar />
                <div ref={content} className=' flex-1 px-14 py-8 space-y-7 overflow-y-scroll h-screen bg-white'>
                    <Heading />
                    <div className="box_cont flex gap-5">
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                       
                    </div>
                    <div ref={searchbar} className='sticky top-4' >
                        <SearchBox change={change} />
                    </div>

                    <div className=' flex flex-col space-y-5'>
                        <Bid/>
                        <Bid/>
                        <Bid/>
                        <Bid/>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Bidding