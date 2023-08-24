import logo from './logo.svg';
import './App.css';
import Button from './Component/Common/Button';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import './Component/Layout/header.css';

function App() {
  const PrintButtonClick = (event) => {
    console.log(event.target.name);
    alert(event.target.name)
  }

  const OnClickFunction = (event) => {
    alert(event.target.id);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div><Header>
          <img className='imageSize' id="btnImage1" src={logo} />
          <div>
            <div className='header-button bottom'><Button id="btnExitTriage" button='Exit Triage' doSomethingAfterClick={PrintButtonClick} size="header-style" /></div>
            <div className='header-button'><Button id="btnSelectLanguage" button='English' doSomethingAfterClick={PrintButtonClick} size="header-style button-margin" /></div>
          </div>
        </Header>
        </div>
      </header>
      <body className='App-body'>

        <div className='customStyleForDiv'>
          <Button id="btnTextSpecificText" button='Text With Specific Width' doSomethingAfterClick={PrintButtonClick} size='staticButtonSize' />
        </div>

        {/* <div className='customStyleForDiv'>
          <Button id="btnResponsiveText" button='Responsive Text' doSomethingAfterClick={PrintButtonClick} style={{ 'color': 'green' }} />
        </div> 
         <div className='customStyleForDiv'>
          <Button id="btnImageText" button='Text With Image' doSomethingAfterClick={OnClickFunction}>
            <img src={logo} id="btnImageText1" alt="buttonpng" border="0" />
          </Button>
        </div>
        <div className='customStyleForDiv'>
          <Button doSomethingAfterClick={OnClickFunction}>
            <img className='imageSize' id="btnImage1" src={logo} />
          </Button>
        </div> */}
      </body>
      <footer className='App-footer'>
        <Footer text='copyright 2023' />
      </footer>
    </div>

  );
}

export default App;
