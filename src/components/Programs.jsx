import './Programs.scss'
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="pHeader">
            <span className='stroke'>explore our </span>
            <span>programs</span>
            <span className='stroke'>to shape you</span>
        </div>

        <div className="categories">
            {programsData.map((program)=>(
                <div className="category">
                   {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs