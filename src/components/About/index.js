import { useEffect, useState } from 'react'
import {
  faReact,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '😎']}
              idx={15}
            />
          </h1>
          <p>
            Hi there 👋 my name is Somya Rawat, and I am a Full-Stack Web
            Developer with 6 months of internship experience. I have a passion
            for creating beautiful, functional, and user-friendly websites using
            a range of technologies and tools.
          </p>
          <p align="LEFT">
            During my internship, I gained hands-on experience working on
            various projects, including building responsive websites, developing
            web applications, and implementing database solutions. I have a
            strong foundation in HTML, CSS, JavaScript, and front-end framework
            like React, as well as back-end technologies like Node.js, Express,
            and MongoDB.
          </p>
          <p>
            My goal is to continue learning and growing as a developer, while
            delivering innovative and high-quality solutions to my clients. I am
            excited to contribute my skills to exciting projects and make a
            difference in the digital world.
          </p>
          <p>
            Thank you for visiting my portfolio website, and I look forward to
            hearing from you soon 🙂
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
