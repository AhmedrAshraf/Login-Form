import './App.css';

const App = () => {
  const numberOfSpans = Math.floor(window.innerHeight / 1);

  const spanElements = Array.from({ length: numberOfSpans }, (_, index) => <span key={index}></span>);

  return (
    <div className="main-container">
        {spanElements}
        <div className="signin-container">
          <div className="content">
            <h2>Sign In</h2>
            <div className="form">
              <div className="inputBox">
                <input type="text"/>
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input type="password" />
                <i>Password</i>
              </div>
              <div className="links">
                <a href="#">Forgot Password ?</a>
                <a href="#">Signup</a>
              </div>
              <div className="inputBox">
                <input type="submit" value='Sign In' />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;