import {links, socials} from './data'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className='nav__menu'>
          {
            links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>
        
      </div>
      <div className="footer__copyright">
        <small>Bouguettaya Amine  &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer