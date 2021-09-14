import { Switch, Route } from "react-router-dom";

// layouts
import LandingPageLayout from "./layouts/LandingPage/LandingPage";

// pages
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";

function App() {
  return (


    <Switch>
      <Route path="/" exact>
        <LandingPageLayout heading="natural skincare" >
          <HomePage />
        </LandingPageLayout>
      </Route>
      <Route path="/products">
        <LandingPageLayout >
          <Products />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
