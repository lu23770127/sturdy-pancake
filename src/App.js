import "../src/assets/sass/main.sass";
function App() {
  return (
    <div className="container">
      <div className="header">
        <label className="logo">VOGUE</label>
        <label className="menu">
          <label className="menu-item">
            <select name="location" id="location">
              <option value="Taiwan">Taiwan</option>
              <option value="HongKong">HongKong</option>
            </select>
            membership hamberger
          </label>
        </label>
      </div>
    </div>
  );
}

export default App;
