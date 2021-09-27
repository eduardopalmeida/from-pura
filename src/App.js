import { Switch, Route } from "react-router-dom";

// layouts
import LandingPageLayout from "./layouts/LandingPage/LandingPage";

// pages
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <LandingPageLayout heading="natural skincare" >
          <HomePage />
        </LandingPageLayout>
      </Route>
      <Route path='/products' exact>
        <LandingPageLayout >
          <Products />
        </LandingPageLayout>
      </Route>
      <Route path='/products/:productId'>
        <LandingPageLayout >
          <ProductDetail />
        </LandingPageLayout >
      </Route>
      <Route path='/aboutus'>
        <LandingPageLayout >
          <AboutUs />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
