import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import Test from "./components/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null); // alert is an object having two properties - msg and code(for color)
  const setAlertHelper = (message, code) => {
    setAlert({ msg: message, code: code });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2C3639";
      setAlertHelper("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Textform
              heading="Enter the text to be analyzed below:"
              mode={mode}
              setAlert={setAlertHelper}
            />
          </Route>
          <Route exact path="/TextUtils">
            <Textform
              heading="Enter the text to be analyzed below:"
              mode={mode}
              setAlert={setAlertHelper}
            />
          </Route>
        </Switch>
        {/* <Test /> */}
      </Router>
    </div>
  );
}

export default App;
