import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"> Copyright &copy; 2020 Cherukkattil Naseer. Director of <a href="https://www.nlmuasys.com/">NLM UA-Systems Pte Ltd</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
