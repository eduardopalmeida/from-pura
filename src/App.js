import { Switch, Route } from "react-router-dom";

// layouts
import LandingPageLayout from "./layouts/LandingPage/LandingPage";

// pages
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/">
      <LandingPageLayout heading="natural skincare" >
        <HomePage />                                                                          
      </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
