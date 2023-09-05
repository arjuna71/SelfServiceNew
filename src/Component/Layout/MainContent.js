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
      //alert(state.nextStep);
    }
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
            <li id="aboutMe" onClick={(e) => rightSideMenu(e.currentTarget.id)}>About Me</li>
            <li id="location" onClick={(e) => rightSideMenu(e.currentTarget.id)}>Location</li>
            <li id='symptoms' onClick={(e) => rightSideMenu(e.currentTarget.id)}>Symptoms</li>
            <li id='relatedSymptom' onClick={(e) => rightSideMenu(e.currentTarget.id)}>Related Symptoms</li>
            <li id='careOptions' onClick={(e) => rightSideMenu(e.currentTarget.id)}>Care Option</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
