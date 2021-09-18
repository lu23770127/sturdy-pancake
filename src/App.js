import "../src/assets/sass/main.sass";

function App() {
  return (
    <div className="container">
      <nav className="header">
        <div className="top">
          <label className="logo">VOGUE</label>
          <label className="menu">
            <label className="menu-item">
              <div className="dropdown">
                <span>Mouse over me</span>
                <div className="dropdown-content">
                  <p>Hello World!</p>
                </div>
              </div>
              <a href="/">membership</a> ---
            </label>
          </label>{" "}
        </div>
        <div className="breadcrumb">
          <a href="/">FASHION</a>
          <a href="/">BEAUTY</a>
          <a href="/">ENTERTAINMENT</a>
          <a href="/">LIFESTYLE</a>
          <a href="/">LUXURY</a>
          <a href="/">VIDEO</a>
          <a href="/">VOGUE有意識</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
