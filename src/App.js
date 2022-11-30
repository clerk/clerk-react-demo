import logo from "./logo.svg";
import "./styles/App.css";
import {SignedOut, RedirectToSignIn} from "@clerk/clerk-react";

function App() {
  return (
    <div className="app">
      <h1>Clerk + React</h1>
      <img src={logo} alt="logo" />
      <a href="https://docs.clerk.dev/reference/clerk-react" target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
        <SignedOut>
            <RedirectToSignIn/>
        </SignedOut>
    </div>
  );
}

export default App;
