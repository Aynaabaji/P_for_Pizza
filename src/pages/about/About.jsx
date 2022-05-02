import React from 'react'
import './about.css'
import AboutLeft from '../../assets/aboutleft.jpeg'

const About = () => {
  return (
      <section>
        <div className="paboutBan"></div>
        <div className="container about__container">
          <div className="about__content">
            <div className="about__left">
              <img src={AboutLeft} alt="aboutleft" />
            </div>
            <div className="about__right">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores tempore vero sequi amet velit voluptatibus repellendus, ea nulla nihil veniam sapiente dicta quibusdam perferendis voluptate voluptatem cupiditate. Ea eveniet consectetur accusamus tempore ut at sint qui aspernatur, quos rerum cupiditate, quas, quibusdam veritatis! A ratione veritatis quidem molestias quae!</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About