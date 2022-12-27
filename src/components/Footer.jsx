import './Footer.scss'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-b-one"></div>
      <div className="footer-b-two"></div>
        <div className="socialLinks">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
        </div>

        <div className="fLogo"><img src={Logo} alt="" /></div>
        <span>Developed By <br />Ammar</span>
    </div>
  )
}

export default Footer