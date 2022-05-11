import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/carlosportella16">
            <div className='dsmovir-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/carlosportella16</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;