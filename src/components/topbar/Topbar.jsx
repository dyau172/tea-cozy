import "./topbar.scss";
import logo from '../../images/logo.png'

export default function topbar (){
  return (
  <div className="topbar">
   
   <img src={logo} alt="" />
   <ul>
     <li><a href="/">Mission</a></li>
     <li><a href="/">Featured Teas</a></li>
     <li><a href="/">Locations</a></li>
    
   </ul>
  </div>
  );
}