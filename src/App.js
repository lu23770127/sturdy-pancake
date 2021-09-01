import logo from "./logo.svg";
import "./App.css";
import "./assets/sass/MyFirstSass.sass";
import "./assets/sass/main.sass";
import "./assets/sass/nestingError.sass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          this is blue h1
          <a href="http://google.com.tw">test</a>
        </h1>
        <h2>this is variable h2</h2>

        <ul>
          <li>
            first li <span>this is span, smaller than li</span>
          </li>
          <li>second li</li>
          <li>
            third with <a href="https://google.com.tw">link!</a>
          </li>
          <li>
            forth with label <label>hi this is label</label>
          </li>
        </ul>
        <h4>hi</h4>
      </header>
    </div>
  );
}

export default App;
