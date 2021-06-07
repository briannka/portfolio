import './App.css';
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="divider" />
      <div className="about">About Me
      <p>I am an experienced technical writer, who is very pationate about front-end web development.</p>
      </div>
      <div className="divider" />
      <div className="technologies">What I know
      <div className="tech-stack-container">
      <img id="html" alt=""></img>
      <img id="css" alt=""></img>
      <img id="sass" alt=""></img>
      <img id="js" alt=""></img>
      <img id="react" alt=""></img>
      <img id="webpack" alt=""></img>
      <img id="jest" alt=""></img>
      </div>
      </div>
      <div className="divider" />
      <div className="projects">My projects
      <Card title={'test'} img={'test'}/>
      </div>
    </div>
  );
}

export default App;
