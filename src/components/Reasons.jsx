import './Reasons.scss'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import nb from '../assets/nb.png'
import adidas from '../assets/adidas.png'
import nike from '../assets/nike.png'
import tick from '../assets/tick.png'

const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
       
        <div className="rLeft">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="rRight">
<h4>some reasons</h4>
<p><span className='stroke'>why</span> choose us ?</p>

<div className="line">
    <img src={tick} alt=""/><span>over 140+ expert coaches</span>
    </div>
<div className="line">
    <img src={tick} alt=""/><span>train smarter and faster then befor</span>
    </div>
<div className="line">
    <img src={tick} alt=""/><span>1 free program for new member</span>
    </div>
<div className="line">
    <img src={tick} alt=""/><span>repaiable partner</span>
    </div>

    <span className="partners">
        our partners
    </span>

    <div className="logos">
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
    </div>

        </div>
    </div>
  )
}

export default Reasons