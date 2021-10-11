// App.js

import "../src/assets/sass/main.sass";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
