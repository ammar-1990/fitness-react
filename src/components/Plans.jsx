import './Plans.scss'
import {plansData} from '../data/plansData'
import whiteTick from '../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans' id='plans'>

        <div className="blur plans-one"></div>
        <div className="blur plans-two"></div>
        <p><span className='stroke'>ready to start </span> your journey <span className='stroke'>now with us</span></p>

        <div className="thePlans">
{plansData.map((plan,i)=>(
    <div className="plan" key={i}>
        {plan.icon}
        <span>{plan.name}</span>
        <span>${plan.price}</span>

        <div className="features">
            {plan.features.map((feature,i)=>(
                <div className="feature">
                <img src={whiteTick} alt="" />
                <span key={i}>{feature}</span>
                </div>
            ))}
        </div>

        <p>See More Benefits -> </p>
        <button>Join Now</button>
    </div>
))}

        </div>
    </div>
  )
}

export default Plans