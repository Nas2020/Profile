import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-smile-o"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>CHERUKKATTIL NASEER</h1>
        <p>
          Emerging Full Stack Blockchain Developer, currently student at {' '}
          <a href="https://www.georgebrown.ca/" target="_blank">George Brown College</a> in Toronto, Canada.
          <br />
          {/* Course:{' '}
          <a href="https://www.georgebrown.ca/programs/blockchain-development-program-t175/" target="_blank">Blockchain Development Program</a>. */}
          <br />A hard-working, self motivated team player who is also well versed in Full Stack Web and Blockchain Development
          with outstanding communication and interpersonal skills.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('project')
            }}
          >
            Academic Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Certificates
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Info
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
