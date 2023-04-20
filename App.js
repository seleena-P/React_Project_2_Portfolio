//import logo from './logo.svg';
//import './App.css';
import Certifications from './Certifications';
import Contact from './Contact';
import Header from './Header';
import Skill from './Skill';
import Top from './Top';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     
        <Header/>
        <Top/>
    
    
     <div className='div2'><Skill/></div> 
     <div className='div3'><Certifications/></div>
     <div><Contact/></div>
     <div className='foot'><Footer/></div>
    </div>
  );
}

export default App;
