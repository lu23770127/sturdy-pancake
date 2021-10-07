// App.js

import "../src/assets/sass/main.sass";
import Header from "./components/Header";
import Article from "./components/Article";
function App() {
  return (
    <div className="container">
      <Header />
      <Article />
    </div>
  );
}

export default App;
