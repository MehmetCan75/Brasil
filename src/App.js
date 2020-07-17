import React from "react";
import "./App.css";
// import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Pictures from './Components/Pictures/Pictures'
import Layout from "./Components/hoc/Layout/Layout";
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <div>
        <Switch>
        <Route path='/contact' component={Contact} />
        <Route exact path='/pictures' component={Pictures} />
          <Route
            path="/"
            render={(props) => (
              <div>
                <Footer />
              </div>
            )}
          />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
