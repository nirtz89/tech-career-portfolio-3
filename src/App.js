import styled from 'styled-components'
import Skills  from './Components/Pages/Skills/Skills';
import Home from "./Components/Pages/Home/Home";
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import Header from './Components/Features/Header/Header';
import NavBar from './Components/Features/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './Components/Pages/ContactMe/Contact';

const StyledMainApp = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Router>
      <StyledMainApp>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/" exact={true} component={Home}>
            <Home />
          </Route>
          <Route path="/portfolio" exact={true} component={Portfolio}>
            <Portfolio />
          </Route>
          <Route path="/skills" exact={true} component={Portfolio}>
            <Skills />
          </Route>
          <Route path="/contact" exact={true} component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </StyledMainApp>
    </Router>
  );
}

export default App;