import './App.css'
import logo from './assets/logo-white.png'
import appBar from './assets/app-bar.png'

function App() {
  return (
    <>
      <div className="main">
        <img src={logo} alt="logo" width="15%"></img>
        <div className="header">Documentation</div>
        <div className="sub-header">Sprint Name Generator for JIRA</div>
        <div className="card">
          <div className="header">Installation</div>
          <div className="text">Install the Sprint Name Generator for JIRA directly inside JIRA Cloud</div>
        </div>
        <div className="card">
          <div className="header">Start The App</div>
          <div className="text">
            <img src={appBar} alt="Start the app over the Apps menu" width="70%"/>
          </div>
          <div className="text tspace">
            You can start the Sprint Name Generator over the Apps menu inside JIRA.
          </div>
        </div>
        <div className="card">
          <div className="header">Let's roll</div>
          <div className="text tspace">
            You can generate new sprint names by clicking on the reload button or pressing enter or space.
          </div>
        </div>
      </div>
    </>
  )
}

export default App
