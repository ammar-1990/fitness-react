import './Hero.scss'
import Header from './Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'
import {motion} from 'framer-motion'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <div className="blur heroBlur"></div>
        <div className="left">
            <Header />

            <div className="bestAd">
                <motion.div className="back"
                initial={{left:'10rem'}}
                whileInView={{left:'8px'}}
                transition={{type:'tween',duration:3}}
                
                ></motion.div>
                <span>the best club in the town</span>
            </div>

            <p className="title"><span className='stroke'>shape</span> your <br />Ideal body</p>
            <p>In here we will help you to shape and build your ideal body and live up your life to fullest.</p>
            <div className="figures">
            <div>
                <span><CountUp start={80} end={140} duration={1.5} prefix={'+'} /></span>
            <span>expert coaches</span>
            </div>

            <div>
                <span><CountUp start={700} end={900} duration={1.5} prefix={'+'} /></span>
            <span>members joined</span>
            </div>
            <div>
                <span><CountUp start={40} end={70} duration={1.5} prefix={'+'} /></span>
            <span>fitness programs</span>
            </div>

         </div>

         <div className="buttons">
            <button>Get Started</button>
            <button>Learn More</button>
         </div>


        </div>
     
        <div className="right">
            <button>Join Now</button>
            <motion.div className="heartRate"
            transition={{type:'spring',duration:3}}
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            >
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="" />
            <motion.img src={hero_image_back} alt="" 
            initial={{left:'-10rem'}}
            whileInView={{left:'-16rem'}}
            transition={{type:'spring',duration:3}}
            
            />

            <motion.div className="calories"
            initial={{right:'55rem'}}
            whileInView={{right:'35rem'}}
            transition={{type:'spring',duration:3}}
            
            >
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero