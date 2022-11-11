const element = (
  <div className="bg-container">
    <h1 className="main">Congratulations</h1>
    <div className="congrats-card-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="heading">KIRAN V</h1>
      <p className="para">
        Vishnu Institute of computer Education and Technology, Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
      >
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
