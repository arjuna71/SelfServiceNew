import Button from "./../Common/Button";
import "./MainContent.css";
import '../Pages/AboutMe';
import { useNavigate } from "react-router-dom"
import AboutMe from "../Pages/AboutMe";
import Location from "../Pages/Location";
import Symptoms from "../Pages/Symptoms";
import RelatedSymptoms from "../Pages/RelatedSymptoms";
import CareOptions from "../Pages/CareOptions"
import { useEffect, useState } from "react";
import i18next from "i18next";

const MainContent = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ nextStep: false });

  function btnClicked() {
    var location = '/Pages/'
    document.getElementById("aboutMe").setAttribute("class", "")
    if (window.location.pathname === '/') {
      navigate(`${location}AboutMe`)
      setState({ nextStep: 'aboutMe' });
      document.getElementById("aboutMe").setAttribute("class", "activeMenu")
    } else if (window.location.pathname === `${location}AboutMe`) {
      navigate(`${location}Location`)
      setState({ nextStep: 'location' });
      document.getElementById("aboutMe").setAttribute("class", "")
      document.getElementById("location").setAttribute("class", "activeMenu")
    } else if (window.location.pathname === `${location}Location`) {
      navigate(`${location}Symptoms`)
      setState({ nextStep: 'symptoms' });
      document.getElementById("location").setAttribute("class", "")

      document.getElementById("symptoms").setAttribute("class", "activeMenu")
    } else if (window.location.pathname === `${location}Symptoms`) {
      navigate(`${location}RelatedSymptoms`)
      setState({ nextStep: 'relatedSymptom' });
      document.getElementById("symptoms").setAttribute("class", "")
      document.getElementById("relatedSymptom").setAttribute("class", "activeMenu")
    }
    else if (window.location.pathname === `${location}RelatedSymptoms`) {
      navigate(`${location}CareOptions`)
      setState({ nextStep: 'careOptions' });
      document.getElementById("relatedSymptom").setAttribute("class", "")
      document.getElementById("careOptions").setAttribute("class", "activeMenu")
    }
    else {
      navigate('/');
      setState({ nextStep: false });
      document.getElementById("careOptions").setAttribute("class", "")
    }
  }

  function rightSideMenu(id) {
    var location = '/Pages/'
    navigate(`${location + id}`)
    setState({ nextStep: id });
    document.getElementById(id).setAttribute("class", "activeMenu")
  }

  useEffect(() => {
    if (document.getElementsByClassName('activeMenu').length <= 2) {
      if (document.getElementsByClassName('activeMenu')[1]?.id === state.nextStep)
        document.getElementsByClassName('activeMenu')[0]?.setAttribute("class", "")
      else
        document.getElementsByClassName('activeMenu')[1]?.setAttribute("class", "")
      localStorage.setItem("nextStep", state.nextStep);
    }
  })
  return (
    <section>
      <div className="row">
        <div className="left">
          {!state.nextStep ?
            <p>{i18next.t("bodyContent.emergencyText")}</p>
            : state.nextStep === "aboutMe" ? <AboutMe />
              : state.nextStep === "location" ? <Location />
                : state.nextStep === "symptoms" ? <Symptoms />
                  : state.nextStep === "relatedSymptom" ? <RelatedSymptoms />
                    : state.nextStep === "careOptions" ? <CareOptions />
                      : state.nextStep = false}
          <Button
            id="btnTextSpecificText"
            button={i18next.t("nextButton")}
            doSomethingAfterClick={btnClicked}
            size="staticButtonSize"
          />

        </div>
        <ul />
        <div className="right">
          <ul className="item">
            <li id="aboutMe" aria-label={i18next.t("rightSideMenu.aboutMe")} onClick={(e) => rightSideMenu(e.currentTarget.id)}>{i18next.t("rightSideMenu.aboutMe")}</li>
            <li id="location" aria-label={i18next.t("rightSideMenu.location")} onClick={(e) => rightSideMenu(e.currentTarget.id)}>{i18next.t("rightSideMenu.location")}</li>
            <li id='symptoms' aria-label={i18next.t("rightSideMenu.symptoms")} onClick={(e) => rightSideMenu(e.currentTarget.id)}>{i18next.t("rightSideMenu.symptoms")}</li>
            <li id='relatedSymptom' aria-label={i18next.t("rightSideMenu.relatedSymptoms")} onClick={(e) => rightSideMenu(e.currentTarget.id)}>{i18next.t("rightSideMenu.relatedSymptoms")}</li>
            <li id='careOptions' aria-label={i18next.t("rightSideMenu.careOptions")} onClick={(e) => rightSideMenu(e.currentTarget.id)}>{i18next.t("rightSideMenu.careOptions")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
