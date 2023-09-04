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

const MainContent = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ nextStep: false });

 // "aboutMe","location", "symptoms", "relatedSymptom", "careOptions"
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

  function aboutMeSideMenu(){
    var location = '/Pages/'
    navigate(`${location}AboutMe`)
    setState({ nextStep: 'aboutMe' });
    document.getElementById("aboutMe").setAttribute("class", "activeMenu")
  }
  
  useEffect(() => {
    debugger;
    const path = window.location.pathname;
    console.log(state.nextStep);
  })
  return (
    <section>
      <div className="row">
        <div className="left">
          {!state.nextStep ?
            <p>Emergency Care Yes Selected</p>
            : state.nextStep === "aboutMe" ? <AboutMe />
              : state.nextStep === "location" ? <Location />
                : state.nextStep === "symptoms" ? <Symptoms />
                  : state.nextStep === "relatedSymptom" ? <RelatedSymptoms />
                    : state.nextStep === "careOptions" ? <CareOptions />
                      : state.nextStep = false}
          <Button
            id="btnTextSpecificText"
            button="Next Button"
            doSomethingAfterClick={btnClicked}
            size="staticButtonSize"
          />

        </div>
        <vl />
        <div className="right">
          <ul className="item">
            <li id="aboutMe" onClick={aboutMeSideMenu}>About Me</li>
            <li id="location">Location</li>
            <li id='symptoms'>Symptoms</li>
            <li id='relatedSymptom'>Related Symptoms</li>
            <li id='careOptions'>Care Option</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
