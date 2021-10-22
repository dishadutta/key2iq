import logo from './logo.svg';
import './App.css';
import Head from './web/head'
import About from './web/about';
import Diagrams from './web/diagrams';
import Links from './web/links';
import Build from './web/build';
import Structure from './web/structure';
import Api from './web/api';
import Header from './web/header';

function App() {
  return (
    <div className="container">
      <Head/>
      <br/> <br/>
      <About/>
      <br/>
      <Diagrams/>
      <br/><br/>
      <Links/>
      <br/><br/>
      <Build/>
      <br/>
      <Structure/>
      <br/><br/>
      <Api/>
      <br/><br/>
      <Header/>
      <br/><br/>
    </div>
  );
}

export default App;
