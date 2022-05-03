import Logotitle from '../../assets/images/logo-s-removebg_ccexpress.png'
import './index.scss'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetter'
import { useEffect, useState } from 'react'
import Logo from '../Home/Logo'
import {Loader} from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 'r', 'a', 'm']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])
 
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={Logotitle} alt='Having Fun' />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                    </h1>
                    <h2>Having Fun</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home