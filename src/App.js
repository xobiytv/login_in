import leftA from './assent/img/left.jpg';
import google_icon from './assent/img/free-icon-google-300221.png';
import facebook_icon from './assent/img/free-icon-facebook-174848.png';
import twitter_icon from './assent/img/free-icon-twitter-733579.png';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h1>
          <span>C</span>reative
        </h1>
        <ul>
          <li>
            <a href="#">New User?</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </main>
      <header className="App-header">
        <div className="left">
          <img src={leftA} className="App-logo" alt="logo" />
        </div>
        <div className="right">
          <div className="text-name">
            <h1>Welcome back</h1>
            <p>login to continue</p>
          </div>

          <div className="input-block">
            <div className="input">
              <i className="bi bi-person-fill"></i>

              <input type="text" placeholder="username111@gmail.com" />
            </div>
            <div className="input">
              <i className="bi bi-lock-fill"></i>

              <input type="text" placeholder="Enter password" />
            </div>
          </div>

          <div className="btn-name">
            <button>LOGIN</button>
            <a href="#">FORGET PASSWORD</a>
          </div>
          <div className="digtle-name">
            <a href="#">Login with</a>
            <ul>
              <li>
                <a href="#" title="гугл иконки">
                  <img src={google_icon} className="google_icon" alt="logo" />
                </a>
              </li>
              <li>
                <a href="#" title="гугл иконки">
                  <img src={facebook_icon} className="google_icon" alt="logo" />
                </a>
              </li>
              <li>
                <a href="#" title="гугл иконки">
                  <img src={twitter_icon} className="google_icon" alt="logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
