import Button from "./../Common/Button";
import "./MainContent.css";

const MainContent = ({ btnClick }) => {
  return (
    <section>
      <div className="row">
        <div className="left">
          <Button
            id="btnTextSpecificText"
            button="Text With Specific Width"
            doSomethingAfterClick={btnClick}
            size="staticButtonSize"
          />
        </div>
        <vl/>
        <div className="right">
          <ul className="item">
            <li>About Me</li>
            <li>Location</li>
            <li>Related Symptoms</li>
            <li>Symptoms</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
