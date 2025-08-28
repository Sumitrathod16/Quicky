import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Explorepage from './components/ExplorePage'; 
import Login from './components/Login';
import Home from './components/home/Home';
import Features from './components/Features';
import Signin from './components/Sign-up';
import Support from './components/Support';
import Footer from './components/Footer';
import About from './components/footer/About'; // Importing the About component
import Careers from './components/footer/Careers'; // Importing the Careers component
import Press from './components/footer/Press'; // Importing the Press component  
import Affiliates from './components/footer/Affiliates';
import Blog from './components/footer/Blog';
import Study from './components/footer/Study'; // Importing the Study component
import Practice from './components/footer/Practice';// Importing the Practice component
import Privacy from './components/footer/Privacy';
import Terms from './components/footer/Terms';
import Cookie from './components/footer/Cookie';
import Html from './components/courses/Html';
import CSS from './components//courses/Css';
import Javascript from './components/courses/Javascript';
import Nodejs from './components/courses/Node';
import Reactjs from './components/courses/React';
import Mongodb from './components/courses/Mongodb';
import Aws from './components/courses/Aws';
import Azure from './components/courses/Azure';
import Gcp from './components/courses/Gcp';
import Flutter from './components/courses/Flutter';
import Python from './components/courses/Python';
import Django from './components/courses/Django';
import Flask from './components/courses/Flask';
import Java from './components/courses/Java';
import Spring from './components/courses/Spring';
import Hibernate from './components/courses/Hibernate';
import ML from './components/courses/Ml';
import Dl from './components/courses/Dl';
import AI from './components/courses/Ai';
import C from './components/courses/C';
import Cpp from './components/courses/C++';
import Php from './components/courses/Php';
import Dbms from './components/courses/Dbms';
import Sql from './components/courses/Sql';
import FAQ from './components//footer/FAQ';
import Mlassign from './components/Assignment/Mlassign';
import Dlassign from './components/Assignment/Dlassign'; 
import Aiassign from './components/Assignment/Aiassign';
import Flutterassign from './components/Assignment/Flutterassign';
import Pyassign from './components/Assignment/Pyassign';
import Djassign from './components/Assignment/Djassign';
import Flaskassign from './components/Assignment/Flaskassign';
import Javaassign from './components/Assignment/Javaassign';
import Springassign from './components/Assignment/Springassign';
import Hiberassign from './components/Assignment/Hiberassign';
import Htmlassign from './components/Assignment/Htmlassign';
import Cssassign from './components/Assignment/Cssassign';
import Jsassign from './components/Assignment/Jsassign';
import Nodeassign from './components/Assignment/Nodeassign';
import Reactassign from './components/Assignment/Reactassign';
import Mongodbassign from './components/Assignment/Mongodbassign';
import Awsassign from './components/Assignment/Awsassign';
import Azureassign from './components/Assignment/Azureassign';
import Gcpassign from './components/Assignment/Gcpassign';
import Cassign from './components/Assignment/Cassign';
import Cppassign from './components/Assignment/Cppassign';
import Phpassign from './components/Assignment/Phpassign';
import Dbmsassign from './components/Assignment/Dbmsassign';
import Sqlassign from './components/Assignment/Sqlassign';
import LandingPage from './components/Landing';

function App() {
  return (
    


    <Router>
      <Routes>
<Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<Login />} />
 <Route path="/signup" element={<Signin />} />
  All other routes with Navbar and Footer 
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Explorepage" element={<Explorepage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/About" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/Affiliates" element={<Affiliates/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/Study" element={<Study/>} />
        <Route path="/Practice" element={<Practice/>} />
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Cookie" element={<Cookie/>}/>
        <Route path="/Html" element={<Html/>}/>
        <Route path="/Css" element={<CSS/>}/>
        <Route path="/Javascript" element={<Javascript/>}/>
        <Route path="/Nodejs" element={<Nodejs/>}/>
        <Route path="/Reactjs" element={<Reactjs/>}/>
        <Route path="/MongoDB" element={<Mongodb/>}/>
        <Route path="/Aws" element={<Aws/>}/>
        <Route path="/Azure" element={<Azure/>}/>
        <Route path="/Gcp" element={<Gcp/>}/>
        <Route path="/Flutter" element={<Flutter/>}/>
        <Route path="/Python" element={<Python/>}/>
        <Route path="/Django" element={<Django/>}/>
        <Route path="/Flask" element={<Flask/>}/>
        <Route path="/Java" element={<Java/>}/>
        <Route path="/Spring" element={<Spring/>}/>
        <Route path="/Hibernate" element={<Hibernate/>}/>
        <Route path="/Ml" element={<ML/>}/>
        <Route path="/Dl" element={<Dl/>}/>
        <Route path="/Ai" element={<AI/>}/>
        <Route path="/C" element={<C/>}/>
        <Route path="/C++" element={<Cpp/>}/>
        <Route path="/Php" element={<Php/>}/>
        <Route path="/Dbms" element={<Dbms/>}/>
        <Route path="/Sql" element={<Sql/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/Mlassign" element={<Mlassign/>}/>
        <Route path="/Dlassign" element={<Dlassign/>}/>
        <Route path="/Aiassign" element={<Aiassign/>}/>
        <Route path="/Flutterassign" element={<Flutterassign/>}/>
        <Route path="/Pyassign" element={<Pyassign/>}/>
        <Route path="/Djassign" element={<Djassign/>}/>
        <Route path="/flaskassign " element={<Flaskassign/>}/>
        <Route path="/Javaassign" element={<Javaassign/>}/>
        <Route path="/Springassign" element={<Springassign/>}/>
        <Route path="/Hiberassign" element={<Hiberassign/>}/>
        <Route path="/Htmlassign" element={<Htmlassign/>}/>
        <Route path="/Cssassign" element={<Cssassign/>}/>
        <Route path="/Jsassign" element={<Jsassign/>}/>
        <Route path="/Nodeassign" element={<Nodeassign/>}/>
        <Route path="/Reactassign" element={<Reactassign/>}/>
        <Route path="/Mongodbassign" element={<Mongodbassign/>}/>
        <Route path="/Awsassign" element={<Awsassign/>}/>
        <Route path="/Azureassign" element={<Azureassign/>}/>
        <Route path="/Gcpassign" element={<Gcpassign/>}/>
        <Route path="/Cassign" element={<Cassign/>}/>
        <Route path="/Cppassign" element={<Cppassign/>}/>
        <Route path="/Phpassign" element={<Phpassign/>}/>
        <Route path="/Dbmsassign" element={<Dbmsassign/>}/>
        <Route path="/Sqlassign" element={<Sqlassign/>}/>
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
    
    
      
  );
  
}
export default App;

