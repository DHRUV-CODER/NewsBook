import React, { useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
  
  const [progress, setProgress] = useState(0);
  
  const Page_Size = 30
  const News_Country="in"
  const apiKey = import.meta.env.VITE_NEWS_API_KEY

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress} height={4} />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} ApiKey={apiKey} key="deafult" PageSize={Page_Size} Country={News_Country} Category="general"/></Route>
            <Route exact path="/business"><News setProgress={setProgress} ApiKey={apiKey} key="business" PageSize={Page_Size} Country={News_Country} Category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} ApiKey={apiKey} key="entertainment" PageSize={Page_Size} Country={News_Country} Category="entertainment"/></Route>
            <Route exact path="/general"><News setProgress={setProgress} ApiKey={apiKey} key="general" PageSize={Page_Size} Country={News_Country} Category="general"/></Route>
            <Route exact path="/health"><News setProgress={setProgress} ApiKey={apiKey} key="health" PageSize={Page_Size} Country={News_Country} Category="health"/></Route>
            <Route exact path="/science"><News setProgress={setProgress} ApiKey={apiKey} key="science" PageSize={Page_Size} Country={News_Country} Category="science"/></Route>
            <Route exact path="/sports"><News setProgress={setProgress} ApiKey={apiKey} key="sports" PageSize={Page_Size} Country={News_Country} Category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={setProgress} ApiKey={apiKey} key="technology" PageSize={Page_Size} Country={News_Country} Category="technology"/></Route>
            <Route exact path="/About"><About /></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </>
    );
  }

export default App;
