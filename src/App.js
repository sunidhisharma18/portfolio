import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import {useState} from "react";
import {Switch,Grid,Paper} from "@material-ui/core";
import {ThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import './App.css';

function App() {
  const [darkMode,setDarkMode]=useState(false);

    const theme = createMuiTheme({
        palette:{
            type: darkMode?"dark":"light",
        }
    });
  return (
    <Router>
      <div className="app" >
        <ThemeProvider theme={theme}>
                    <Paper elevation={0} style={{height:"100%"}}>
                        <Grid container direction="column">
                          <Navbar/>
                          <Switch size={"medium"} checked={darkMode} onChange={()=> setDarkMode(!darkMode)}>
                                Theme Change
                            </Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/skills" component={Skills}/>
                            <Route exact path="/project" component={Project}/>
                            <Route exact path="/contact" component={Contact}/>
                          <Footer/>
                          </Grid>
                    </Paper>
        </ThemeProvider>
      </div>
    </Router>
                      
  );
}

export default App;
