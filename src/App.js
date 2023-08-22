import logo from './logo.svg';
import './App.css';
import ButtonGroup from './Component/ButtonGroup';
// import Inputfield from './Component/InputField';

function App() {
  const PrintButtonClick = (event) =>{
    console.log(event.target.name);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup button={["one", "Two", "Three"]} doSomethingAfterClick={PrintButtonClick}/>
      </header>
    </div>
  );
}

export default App;
