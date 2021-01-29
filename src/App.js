import './App.css';
import Classic from './Classic';
import About from './About';
import Blog from './Blog';
import Pricing from './Pricing';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from "./Footer";
import {Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Classic} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    </>
  );
}

export default App;