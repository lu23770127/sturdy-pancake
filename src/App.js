import logo from './logo.svg';
import './App.css';
import './MyFirstSass.sass';
import './main.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>this is blue h1
          <a href="http://google.com.tw">test</a>
        </h1>
        <h2>this is variable h2</h2>
      </header>
    </div>
  );
}

export default App;
