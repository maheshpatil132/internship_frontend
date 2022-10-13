import React from 'react'
import Slider from "react-slick";
import OtherCompany from './Common/company-des/OtherCompany';
import { BsArrowDownCircleFill } from "react-icons/bs";



const ProductSlide = () => {


   

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div>
    <Slider className='text-black' {...settings}>
      <OtherCompany/>
      <OtherCompany/>
      <OtherCompany/>
      <OtherCompany/>
      <OtherCompany/>
    </Slider>
    </div>
  )
}

export default ProductSlide