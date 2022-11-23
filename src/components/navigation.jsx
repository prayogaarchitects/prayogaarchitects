
import { Route, Routes, Link } from "react-router-dom";
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header'>
        <Link to='/'><img src={process.env.PUBLIC_URL + '/img/PAlogo.jpeg'}  className="iconv" alt="Logo" /></Link>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <Link className='navbar-brand mainheader page-scroll' to='/'>
            Prayoga Architects
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            
            <li>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link to='/ourservices' >
                Our Services
              </Link>
            </li>
            <li>
              <Link to='/gallery'>
                Gallery
              </Link>
            </li>
            
            <li>
              <Link to='/contact' >
                Contact
              </Link>
            </li>
            {/* <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/ourservices" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </Link>
              <div class="dropdown-menu" id="dropmenu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/allprojects">All Projects</Link>
                <Link class="dropdown-item" to="/interiors">Interiors</Link>
                <Link class="dropdown-item" to="/archandint">Architecture + Interiors</Link>
                <Link class="dropdown-item" to="/architecture">Architecture</Link>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
