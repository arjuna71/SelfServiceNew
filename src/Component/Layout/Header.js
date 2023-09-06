import logo from "./../../logo.svg";
import "./Header.css";
import {  useState } from "react";


const Header = () => {
  const [state, setState] = useState({isToggleOn: false})
  const openMenu=(click)=>{
    var openLanguageToggle= document.getElementById("toggleDisplay")?.style.display
    if(openLanguageToggle === "block"){
    setState({isToggleOn: false})
    openLanguageToggle = "none"
    }else{
      openLanguageToggle = "block"
      setState({isToggleOn: true})
    }
  }
  const changeLanguage=(languageId)=>{
    const choise= window.confirm(
      "Are you sure you want to change the language?"
     )
 
     if(choise){
       window.location.reload();
       sessionStorage.setItem('languageCode',languageId);
     }
 
   }
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" id="imgLogo" alt="Logo" />
        <ul className="nav-items">
          <li name="english" onClick={(e)=> (openMenu(e.currentTarget.click))}>English</li>   
          {state.isToggleOn ? <div id='toggleDisplay' className="toggleDisplayStyle" style={{display: "block"}}>
          <li id='en' onClick={(e)=>changeLanguage(e.currentTarget.id)}>English</li>
          <li id='fr' onClick={(e)=>changeLanguage(e.currentTarget.id)}>French</li>
          <li id='es' onClick={(e)=>changeLanguage(e.currentTarget.id)}>Spanish</li>
          <li id='de' onClick={(e)=>changeLanguage(e.currentTarget.id)}>German</li></div> : ""}
          <li>Exit Triage</li>
        </ul>
      </nav>
      <hr/>
    </header>
  );
};

export default Header;
