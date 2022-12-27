import "./Testimonials.scss";
import { testimonialsData } from "../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import {motion} from 'framer-motion'

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const dLenght = testimonialsData.length;

  const handleClick = (param) => {
    if (param === "left") {
    selected===0?
    setSelected(dLenght-1):
    setSelected(prev=>prev-1)
    } else {
    selected=== dLenght - 1?
    setSelected(0):
    setSelected(prev=>prev+1)
    }
  };

  return (
    <div className="testimonials" id="testimonials">
      <div className="lTest">
        <span>testimonials</span>
        <span className="stroke">what they</span>
        <span>say about us</span>
        <motion.span
           key={selected}
           initial={{opacity:0,x:-100}}
           animate={{opacity:1,x:0}}
      
           transition={{type:'spring',duration:2}}
        
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          {"  "}-{"  "}
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="rTest">
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity :1,x:0}}
        transition={{type:'spring',duration:2}}
        ></motion.div>
        <motion.div
        
        initial={{opacity:0,x:100}}
        whileInView={{opacity :1,x:0}}
        transition={{type:'spring',duration:2}}
        ></motion.div>
        <motion.img src={testimonialsData[selected].image} alt="" 
         key={selected}
         initial={{opacity:0,x:100}}
         animate={{opacity:1,x:0}}
    
         transition={{type:'spring',duration:2}}
       
        
        />
        <div className="arrows">
          <img onClick={() => handleClick("left")} src={leftArrow} alt="" />
          <img onClick={() => handleClick("right")} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
