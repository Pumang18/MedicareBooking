import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0 flex-col lg:flex-row ">
          {/* about ki img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p className="text_para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat veniam voluptates aperiam quisquam officia vel ab, deserunt ea? Voluptate adipisci nobis quia. Quia voluptates officiis maiores? Atque quidem ut eos?</p>

            <p className="text_para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus minus non eveniet fugiat a, porro aliquid facere assumenda quos.</p>
            <Link to='/'>
          <button className="btn">Learn More</button>
          </Link>
          </div>

          

        </div>
      </div>
    </section>
  )
}

export default About