import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import Rec from './components/rec/Rec';
import Locations from './components/locations/Locations';
import Contact from './components/contact/Contact';
import "./app.scss"


function App() {

  return (
    <div className="app">
     <Topbar/>
     <div className="section">
       <Intro/>
       <Rec/>
       <Locations/>
       <div className="footer">
        <Contact/>
       </div>
     </div>
    </div>
  );
}

export default App;