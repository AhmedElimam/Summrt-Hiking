import './App.css';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuBlog from './components/pages/Menu/MenuBlog';
import PlansIntro from './components/pages/blog/PlansIntro';
import Blog from './components/pages/blog/Blog';
import ScondryHero from './components/pages/blog/ScondryHero';
import Pricing from './components/pages/pricing/Pricing';
import MainCarousel from './components/pages/pricing/MainCarousel';
import ContactUs from './components/pages/footer/ContactUs';
import Footer from './components/pages/footer/Footer'
import Regstier from './components/pages/Signin/Regstier';
function App() {
  return (
    <Router>
      <div className="Home">
      <Route path='/' exact component={Navbar}/>
      <Route path='/' exact component={HeroSection} />
      <Route path='/' exact component={MenuBlog} />
      <div className="blog-app">
      <Route path='/' exact component={PlansIntro} />
      <Route path='/' exact component={Blog} />
      <Route path='/' exact component={ScondryHero} />
      </div>
      <div className="plans-scroll">
      <Route path='/' exact component={Pricing} />
      <Route path='/' exact component={MainCarousel} />
      </div>
      <div className="conact-scroll">
      <Route path='/' exact component={ContactUs} />
      </div>
      <Route path='/' exact component={Footer} />
      <Route path='/Regstier'>
        <Regstier />
      </Route>
      </div>
    </Router>
  );
}

export default App;
