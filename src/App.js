import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';

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

      </footer>
    </div>

  );
}

export default App;
