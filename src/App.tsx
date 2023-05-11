import logo from './assets/logo-animated.svg'
import appBar from './assets/app-bar.png'
import appBarMobile from './assets/app-bar-mobile.png'
import menuItem from './assets/menu-item.png'
import {Video} from "./Video";

function App() {
  return (
    <>
      <div className="main">
        <object type="image/svg+xml" data={logo} width="200rem" height="180rem"></object>
        <div className="header">Documentation</div>
        <div className="sub-header">Sprint Name Generator for JIRA</div>
        <div className="card">
          <div className="card-header">Installation</div>
          <div className="text">Install the Sprint Name Generator for JIRA directly inside your JIRA Cloud
            installation.
          </div>
        </div>
        <div className="card">
          <div className="card-header">Start The App</div>
          <div className="text flex-center">
            <img src={appBar} alt="Start the app over the Apps menu" className="app-bar"/>
            <img src={appBarMobile} alt="Start the app over the Apps menu" className="app-bar-mobile"/>
          </div>
          <div className="text tspace">
            <div>
              You can start the Sprint Name Generator over the Apps menu inside JIRA.
            </div>
          </div>
          <div className="text tspace">
            <img src={menuItem} alt="menu item" style={{width: 'min(300px, 100%)'}}></img>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Let's Roll</div>
          <div className="text">
            You can generate new sprint names by clicking on the reload button or by pressing <span
            className="key">enter</span> or <span className="key">space</span>.
          </div>
          <div className="tspace">
            <Video />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Any Questions?</div>
          <div className="text">
            If you have any questions, feel free to contact us by e-mail at <a href="mailto:sng-support@rappicode.ch">sng-support@rappicode.ch</a>.
          </div>
        </div>
      </div>
    </>
  )
}

export default App
