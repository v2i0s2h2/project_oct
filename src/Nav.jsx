import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
        <Link className="nav-link" to='/GroupedTeamMember'>community gaming</Link>
       

        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>Explore</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>FAQ</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>Blog</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>Leaderbord</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>myquest</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>sign up</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>sign in</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMember'>countries</Link>
        </li>
     
      </ul>
   
    </nav>
  )
}
export default Nav
