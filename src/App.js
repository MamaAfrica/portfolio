import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Project from './components/Project';
import Service from './components/Service';


function App() {
  return (
    <div className='App'>
<Home />
<About />
<Service />
<Project />
<Blog/>
<Contact/>
<Footer/>
</div>
);
}

export default App;
