import i18next from "i18next";
import logo from "./../../logo.svg";
import "./Header.css";
import { useState } from "react";
import { Trans, useTranslation, I18nextProvider } from 'react-i18next';
import i18n from "../../i18n";
import Modal from "https://cdn.skypack.dev/react-modal@3.16.1";
import React from "react";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:'80%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '1px 2px #888888',
  },
};


const Header = () => {
  //const { t, i18n } = useTranslation();
  const [state, setState] = useState({ isToggleOn: false })
  const openMenu = (click) => {
    var openLanguageToggle = document.getElementById("toggleDisplay")?.style.display
    if (openLanguageToggle === "block") {
      setState({ isToggleOn: false })
      openLanguageToggle = "none"
    } else {
      openLanguageToggle = "block"
      setState({ isToggleOn: true })
    }
  }
  const changeLanguage = (languageId) => {  
    const choise = window.confirm(
      i18next.t("header.languageMsg")
    )
    if (choise) {
      window.location.reload();
      sessionStorage.setItem('languageCode', languageId);
      i18n.changeLanguage(languageId)
    }
  }

  const exitTriage = (id)=>{
    const choise = window.confirm(
      i18next.t("header.exitTriageMsg")
    )
    if(choise){
      window.location.reload();
    }
  }
  
  return (
    <>
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" id="imgLogo" alt="Logo" />
        <ul className="nav-items">
          <li name="english" aria-label={i18n.t("header.english")} onClick={(e) => (openMenu(e.currentTarget.click))}><Trans i18nKey="header.english"></Trans></li>
          {state.isToggleOn ? <div id='toggleDisplay' className="toggleDisplayStyle" style={{ display: "block" }}>
            <li id='en' onClick={(e) => changeLanguage(e.currentTarget.id)}><Trans i18nKey="header.english"></Trans></li>
            <li id='fr' onClick={(e) => changeLanguage(e.currentTarget.id)}><Trans i18nKey="header.french"></Trans></li>
            <li id='es' onClick={(e) => changeLanguage(e.currentTarget.id)}><Trans i18nKey="header.spanish"></Trans></li>
            <li id='de' onClick={(e) => changeLanguage(e.currentTarget.id)}><Trans i18nKey="header.german"></Trans></li></div> : ""}
          <li id='exitTriage' onClick={(e) => exitTriage(e.currentTarget.id)}><Trans i18nKey="header.exitTriage"></Trans></li>
        </ul>
      </nav>
      <hr />
    </header>
    </>
  );
};

export default Header;

