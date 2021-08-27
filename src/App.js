import logo from "./logo.svg";
import "./App.css";
import "./MyFirstSass.sass";
import "./main.sass";
import "./nesting.sass";

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
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
