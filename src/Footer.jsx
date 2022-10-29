import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram , faTelegram, faTwitter, faDiscord, faTwitch , faMedium} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        

        
      <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'> <span>gaming </span> </Link>
        </li>

        <li className="nav-item">
        <a href="https://facebook.com" >
<FontAwesomeIcon icon= {faFacebook} />
          </a>
        </li>
        
        <li className="nav-item">
        <a href="https://facebook.com" >
<FontAwesomeIcon icon= {faInstagram} />
          </a>
        </li>
     
        <li className="nav-item">
        <a href="https://facebook.com" >
<FontAwesomeIcon icon= {faDiscord} />
          </a>
        </li>
     
        <li className="nav-item">
        <a href="https://facebook.com" >
<FontAwesomeIcon icon= {faTelegram} />
          </a>
        </li>
     
        <li className="nav-item">
        <a href="https://facebook.com" >
<FontAwesomeIcon icon= {faTwitch} />
          </a>
        </li>
     
        <li className="nav-item">
        <a href="https://facebook.com" >
<FontAwesomeIcon icon= {faTwitter} />
          </a>
        </li>
     
        <li className="nav-item">
        <a href="https://facebook.com" >
<FontAwesomeIcon icon= {faMedium} />
          </a>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>anything you want </Link>
        </li>
     
     
      </ul>
   
    </nav>
  )
}
export default Footer 
