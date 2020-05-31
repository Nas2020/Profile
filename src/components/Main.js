import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpeg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <div>
            <b>Skills on making:</b>
            <ul>
              <li>- Smart Contracts</li>
              <li>- Design Patterns for Blockchain</li>
              <li>- Distributed Applications (dApp)</li>
              <li>- Full stack development</li>
              <li>- Blockchain Architecture, Security and Regulations</li>
            </ul>
            <b>Skills:</b>
            <ul>
              <li>
              - Avionics Engineering Workshop and Design Skills.
              </li>
              <li>
              - Communication, interpersonal, leadership, entrepreneurship and project management.
              </li>
            </ul>
          </div>
          {close}
        </article> */}

<article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <div>
            <b>Technical Skills:</b>
            <ul>
              <li>- Programming: JavaScript, Solidity</li>
              <li>- Web Applications: nodeJs, reactJs, HTML, CSS, MongoDB, socket.io</li>
              <li>- Blockchain: Ethereum</li>
              <li>- DevOps Tools: Jenkins, GIT</li>
              <li>- Project Management: Trello, Microsft Team</li>
            </ul>
          </div>
          {close}
        </article>

{/* Education Section */}

        {/* <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <div>
          <b>Blockchain Development Program -</b> <a href = "https://www.georgebrown.ca/" target="_blank"> George Brown College,</a> Canada — Jan, 2020 to Present (Casa Loma Campus, Toronto).
          <ul style= {{listStyleType: "square" }} ><li><b>Current status: </b>Semester 1 of 3 completed</li>
          <li><b>Completed Courses: </b>
            <ul style= {{listStyleType: "circle" }}><li>Introduction to Blockchain, Security Practices, Smart Contracts, Laws and Regulations and Industry Applications.
            <ul><li>Remix Solidity Programming Basics, web3, metamask wallet, injected web3 and dApp deployment.</li>
            <li>Blockchain architecture, white paper writing and analysing.</li></ul>
            </li><li>Full Stack Development.
              <ul><li>HTML, CSS, JavaScript, Nodejs, jQuery, Bootstrap, ReactJs, MongoDB.</li></ul>
          </li>
          </ul>
          </li> <li><b>Project Completed</b>
          <ul><li>Project Chat-App as part of Full Stack Development III (<a href = "https://5e8c3d241303e42341e4b486--friendly-snyder-1f7d4c.netlify.app/" target="_blank"> click here</a>) and IV
          (<a href = "https://friendly-snyder-1f7d4c.netlify.app/" target="_blank"> click here</a>).
          
           </li><li>• Website Development with backend and MongoDB database (<a href = "https://agile-sands-51050.herokuapp.com/" target="_blank"> click here</a>). </li></ul>
          </li></ul>
          </div>
          <div><b>Bachelor of Engineering (Hon’s) </b><a href = "https://www.sunderland.ac.uk/" target="_blank">– University of Sunderland</a>, UK — 2007-2009 (TEG International College, Singapore)<ul>
            <li><b>Major:</b>Electronics and Electrical Engineering</li>
          </ul> <b>Diploma in Electronics</b><a href = "https://www.tp.edu.sg/" target="_blank"> – Temasek Polytechnic</a>, Singapore — 2002-2005
          </div>
          {close}
        </article> */}

<article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <div>
          <b>Blockchain Development Program -</b> <a href = "https://www.georgebrown.ca/" target="_blank"> George Brown College,</a> Canada — Jan, 2020 to Present (Casa Loma Campus, Toronto).
          <ul style= {{listStyleType: "square" }} ><li><b>Key Courses/Concepts:</b></li>
         
            <ul style= {{listStyleType: "circle" }}><li>Design crypto-economic models to solve business problems</li>
            <li>Design the architecture of decentralized applications leveraging Blockchain Technology</li>
            <li>Application of IT project management skills and DevOps tools for software projects</li>
            <li>Ethereum smart contracts programming with proper testing of code to comply security requirements</li>
          </ul></ul>
          </div>

          <div><b>Bachelor of Engineering (Hon’s) </b><a href = "https://www.sunderland.ac.uk/" target="_blank">– University of Sunderland</a>, UK — Aug, 2006- Nov, 2009
          <ul style= {{listStyleType: "square" }} ><li><b>Key Courses/Concepts:</b></li>
         
            <ul style= {{listStyleType: "circle" }}><li>Major: Electronics and Electrical Engineeering</li>
            <li>Specialize in digital and analogue electronics, industrial control systems design and machines.</li>
            <li>SCADA and PLC Programming</li>
          </ul></ul>
          </div>
          
          <div><b>Diploma in Electronics</b><a href = "https://www.tp.edu.sg/" target="_blank"> – Temasek Polytechnic</a>, Singapore — June, 2002- July, 2005
          <ul style= {{listStyleType: "square" }} ><li><b>Key Courses/Concepts:</b></li>
         
            <ul style= {{listStyleType: "circle" }}><li>Major: Eletronics Engineering</li>
            <li>Embedded system design and programming</li>
            <li>Java programming fundamentals</li>
          </ul></ul>
          </div>
          {close}
        </article>

{/* Academic Projects */}
        <article
          id="project"
          className={`${this.props.article === 'project' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Academic Projects</h2>
          <div>
          <a href = "https://5e8c3d241303e42341e4b486--friendly-snyder-1f7d4c.netlify.app/" target="_blank"> <b>Chat Application-Full Stack Development</b></a> --------------April, 2020.
          <ul style= {{listStyleType: "square" }} ><li><b><a href = "https://www.georgebrown.ca/" target="_blank"> George Brown College | </a></b>Toronto, Canada</li>
         
            <ul style= {{listStyleType: "circle" }}>
            <li>Developed fully functional chat application based on reactjs, socket.io, nodeJs and MongoDB</li>
            <li>Deployed back-end to Heroku and Fron-end to netlify</li>
            <li>Team work(group of two) and follwed advanced git concepts during software development</li>
          </ul></ul>
          </div>

          <div>
          <b>Universal Automated Relay Tester</b>--------------August, 2009.
          <ul style= {{listStyleType: "square" }} ><li><b><a href = "https://www.sunderland.ac.uk/" target="_blank"> University of Sunderland | </a></b>United Kingdom.</li>
         
            <ul style= {{listStyleType: "circle" }}>
            <li>Designed and implemented prototype for Universal Automated Relay Tester</li>
            <li>Individual project and applied arduino programming knowledge into the project</li>
          </ul></ul>
          </div>

          <div>
          <b>Palm Home Automation System</b> --------------April, 2005.
          <ul style= {{listStyleType: "square" }} ><li><b><a href = "https://www.tp.edu.sg/" target="_blank"> Temasek Polytechnic | </a></b>Singapore</li>
         
            <ul style= {{listStyleType: "circle" }}>
            <li>Applied Mobile Visual Basic programming skills to integrate Palmtop with basic home electrical intreface baord from cytech technology, Singapore</li>
            <li>Well managed team effort (group of four) produced basic functional project</li>
          </ul></ul>
          </div>

          {close}
        </article>

{/* Certificates */}

        {/* <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Certificates</h2>
          <div><b>Profession:</b> Senior Technical Specialist - Avionics. <p><b>Total Years of Experience:</b>13 Years (Nov/2006 to Nov/2019).</p>
          <p><b> Main duties:</b></p>
          <p>1. Avionics troubleshoot, repair, overhaul, test, modify, install and inspect aircraft electronic systems and components including communications, navigations, and auto flight equipment.
          </p><p>
          2. Inspect and sign off on self-work and work of others and issue authorised released certificates for avionic components on behalf of Civil Aviation Authority of Singapore (CAAS AW95), FAA Form 8130-3, EASA Form 1 etc
          </p>
          <p><b>Senior Technical Specialist, </b> <a href = "https://www.collinsaerospace.com/en" target="_blank">Collins Aerospace (Rockwell Collins),</a> Singapore — 2014(Feb) to 2019(Nov).</p>
          <p><b>Senior Technical Specialist, </b><a href = "https://www.thalesgroup.com/en/countries/asia-pacific/singapore" target="_blank">Thales solutions Pte Ltd,</a> Singapore — 2008(Mar) to 2014(Feb)</p>
          <p><b>Avionics Technician,</b> <a href = "https://aerospace.honeywell.com/en" target="_blank">Honeywell Aerospace Pte Ltd,</a> Singapore — 2006(Nov) to 2008(Mar)</p>
          </div>
          {close} 
        </article> */}
         <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Certificates</h2>
          <div>
          <ul style= {{listStyleType: "square" }} ><li><b>AI in Fintech essential Training</b>--------------May, 2020.</li>
          <a href = "https://www.linkedin.com/in/cherukkattil-naseer-3526201a/" target="_blank">
          LinkedIn | </a>online.
          </ul>
          <ul style= {{listStyleType: "square" }} ><li><b>Node.js essential Training</b>--------------May, 2020.</li>
          <a href = "https://www.linkedin.com/in/cherukkattil-naseer-3526201a/" target="_blank">
          LinkedIn | </a>online.
          </ul>
          <ul style= {{listStyleType: "square" }} ><li><b>React.js essential Training</b>--------------May, 2020.</li>
          <a href = "https://www.linkedin.com/in/cherukkattil-naseer-3526201a/" target="_blank">
          LinkedIn | </a>online.
          </ul>
          <ul style= {{listStyleType: "square" }} ><li><b>Etheruem: Building Blockchain Decentralized Apps (DApps)</b>--------May, 2020.</li>
          <a href = "https://www.linkedin.com/in/cherukkattil-naseer-3526201a/" target="_blank">
          LinkedIn | </a>online.
          </ul>
          </div>
          {close}
        </article>


        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Info</h2>
          <span className="image main">
            {/* <img src={pic01} alt="" /> */}
          </span>
          <div><b>Address:</b> 386 Wharncliffe Rd, South London ON-N6J2M1, Canada
          {/* <li><b>Singapore: </b> BLK897, #03-812, Tampines Street 81, Singapore-520897</li> */}
          </div>
          <div>
            
            <b>Contact no: </b> 
            
              {/* <p> +65 87483486 (Singapore) <a
                href="https://is.gd/WJZk5a"
                className="icon fa-whatsapp"
                target="_blank"></a> </p> */}
                
                <p>+1 (416)3000 491 <a
                href="https://is.gd/boq3wP"
                className="icon fa-whatsapp"
                target="_blank"></a> </p></div>
          <div><b>Email:</b> <a href = "mailto:naseer8518@gmail.com">naseer8518@gmail.com</a></div> 

          {/* <div><b>Nationality:</b> Singapore </div>
          <div><b>Residency Status Canada:</b>Open Work Permit and Study Permit</div>
          <div><b>Date of Birth:</b>05-Mar-1985 </div> <a href="#work"> </a></div> */}


          <ul className="icons">
            <li> 
              <a
                href="https://www.linkedin.com/in/cherukkattil-naseer-3526201a/"
                className="icon fa-linkedin"
                target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/cher.nash" className="icon fa-facebook" target="_blank">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Nas2020"
                className="icon fa-github"
                target="_blank">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )  
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
